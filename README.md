# ExperienceIn
Projeto adaptado e desenvolvido para fins didáticos na matéria de Programação para Internet II (IFB - Campus Brasília).

## Branch API

### Vídeos de execução da implementação

1. Introdução e edição do arquivo `views.py`: https://youtu.be/RjP4W2OEXt0
2. Contiuação da edição do arquivo `views.py`: https://youtu.be/fUxCwHP8j6c
3. Commit e push: https://youtu.be/qJCtoMM-QZI
4. Criação do arquivo `serializers.py`: https://youtu.be/Mr3oHC02nYE
5. Edição do arquivo `urls.py`, testes e finalização do tutorial: https://youtu.be/DdWoKIdf4ac

### Vídeo 1

1. Clonar repositório (experiencein - Github)
    1. Criar branch para a API  →  `git branch api`
    2. Alternar para o branch criado →  `git checkout api`
2. Preparar ambiente de desenvolvimento
    1. criar ambiente virtual
    2. ativar ambiente virtual
    3. `pip3 install django==2.2 djangorestframework`
3. Identificar os endpoints a serem criados
    1. perfis/  
    POST → nome, empresa, telefone, email, ~~contatos(n,n)~~, senha | Cria perfil novo  
    GET → id, nome, e-mail, pode_convidar  | Recupera a lista de perfis (todos que constam no banco)
    2. perfis/id  
    GET → id, nome, e-mail, pode_convidar | Recupera usuário com id informado

### Vídeo 2

3. Identificar os endpoints a serem criados (continuação)

    3. perfil/  
    GET → id, nome, empresa, telefone, email, contatos(n,n) | Recupera o perfil de quem está logado
    4. convites/  
    GET → id, convidado, solicitante | Retorna todos os convites recebidos pelo usuário logado
    5. convites/aceitar/id  
    POST → aceita convite com id informado
    6. convites/convidar/id  
    POST → envia convites para o perfil com id informado
    7. login/  
    POST → username, password | Retorna token de autenticação

4. Adicionar rest_framework ao "settings.py"

    ```python
    INSTALLED_APPS = [
        ...
        'rest_framework',
        'rest_framework.authtoken',
    ]
    ```

### Vídeo 4

5. Criar arquivo `serializers.py`  na pasta perfil
6. Criar classe ContatoSerializer
7. Criar classe PerfilSerializer
    1. Adicionar campos de email e password para criar um usuário no momento de criação do Perfil
    2. Modificar método create
    3. Adicionar no método create a criação do token
8. Criar classe PerfilSimplificadoSerializer
    1. Adicionar campo pode_convidar - para verificar se o perfil já faz parte dos contatos
9. Criar classe ConviteSerializer

### Vídeo 5

10. No arquivo `views.py`:
    1. Criar PerfilViewSet
    2. Criar função get_convites
    3. Criar função get_meu_perfil
    4. Criar função aceitar
    5. Criar função convidar    
11. No arquivo `urls.py`:
    1. Adicionar PerfilViewSet para o endpoint 'perfis'
    2. Adicionar endpoint 'perfil/'
    3. Adicionar endpoint 'convites/'
    4. Adicionar endpoint 'convites/aceitar/<int:convite_id>'
    5. Adicionar endpoint 'convites/convidar/<int:convite_id>'
    6. Adicionar endpoint 'login/'

12. Adicionar permissões e autenticação
- Determina por padrão a utilização de autenticação através do envio de token no cabeçalho, e define que apenas os usuário que estiverem autenticados poderão acessar os dados da API.

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ]
}
```

13. Atualizar modelos (pois dois apps foram incluídos no item 4)

    `python manage.py makemigrations` (apenas para verificar)

    `python manage.py migrate`

14. Realizar o commit e push para o envio dos códigos da api para o repositório GitHub

    `git commit -m "mensagem de identificação do commit"`

    `git push -u origin api`

#### Tempo previsto para execução: 2 horas

---

### Proxy para o git
- Ativa: _git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port_
- Remove: _git config --global --unset http.proxy_
