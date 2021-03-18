import React, { useEffect, useState } from "react";
import { api } from "../../Services/api";
import "./Profiles.css";

export default function Profiles() {
  const [profiles, setProfiles] = useState();
  const [currentProfile, setCurrentProfile] = useState();
  const [message, setMessage] = useState();
  const [currentInvitedProfile, setCurrentInvitedProfile] = useState();
  const [invites, setInvites] = useState();

  useEffect(() => {
    api
      .get("/perfil/")
      .then((resp) => setCurrentProfile(resp.data))
      .catch((error) => console.erro(error));

    api
      .get("/perfis/")
      .then((resp) => setProfiles(resp.data))
      .catch((error) => console.error(error));

    api
      .get("/convites/")
      .then((resp) => {
        const profilesInfo = resp?.data.map((invite) =>
          profiles?.filter((profile) => {
            return profile.id === invite.solicitante;
          }),
        );
        console.log(profilesInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  function invite(id) {
    api
      .post(`/convites/convidar/${id}`)
      .then((resp) => setMessage(resp.data.messagem))
      .catch((error) => console.error(error));

    setCurrentInvitedProfile(id);
  }

  function getProfileInfo(id) {
    profiles?.find((profile) => profile.id === id);
  }

  return (
    <div className="profiles">
      <div className="invite">
        {profiles?.map((profile) =>
          profile.id === currentProfile?.id ? null : (
            <div key={profile.id}>
              <div className="card">
                <h3>{profile.nome}</h3>
                <span>{profile.email}</span>
                {profile.pode_convidar ? (
                  <button
                    className="icon"
                    title="convidar"
                    onClick={() => invite(profile.id)}
                  ></button>
                ) : null}
              </div>
              {profile.id === currentInvitedProfile ? (
                <span className="message">{message}</span>
              ) : null}
            </div>
          ),
        )}
      </div>
      <div className="invitations">
        <h2>Convites</h2>
        {invites?.map((invite) => (
          <div className="card" key={invite.id}>
            <h3>{getProfileInfo(invite.solicitante)}</h3>
            <buttton>Aceitar</buttton>
          </div>
        ))}
      </div>
      {/* <div>
        {currentProfile?.contatos.map((contact) => (
          <div className="card">
            <h3>{contact.nome}</h3>
            <span>{contact.email}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
