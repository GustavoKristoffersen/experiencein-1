# ExperienceIn
Projeto adaptado e desenvolvido para fins didáticos na matéria de Programação para Internet II (IFB - Campus Brasília).

## Branch API

### Vídeos de execução da implementação

1. https://youtu.be/RjP4W2OEXt0
2. https://youtu.be/fUxCwHP8j6c
3. Processing
4. Processing

### Vídeo 1

1. Clonar repositório (experiencein - Github)
    1. Criar branch para a API  →  `git branch api`
    2. Alternar para o branch criado →  `git checkout api`
2. Preparar ambiente de desenvolvimento
    1. criar ambiente virtual
    2. ativar ambiente virtual
    3. `pip3 install django==2.2 djangorestframework`
3. Identificar os endpoints a serem criados

    Prints do sistema atual (antes da conversão em uma API):

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled.png)
    Figura 1. Tela de login.

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%201.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%201.png)
    Figura 2. Tela de cadastro de usuário.

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%202.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%202.png)
    Figura 3. Tela inicial da rede social logo após o login.

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%203.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%203.png)
    Figura 4. Página inicial da rede social  quando um convite é recebido.

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%204.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%204.png)
    Figura 5. Página inicial da rede social após um convite ser aceito.

    ![API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%205.png](API%20-%20Experiencein%20b3857ef579264bf3bd349ee9efa381cb/Untitled%205.png)
    Figura 6. Página do contato.

  1. perfis/
      POST → nome, empresa, telefone, email, ~~contatos(n,n)~~, senha | Cria perfil novo
      GET → id, nome, e-mail, pode_convidar  | Recupera a lista de perfis (todos que constam no banco)

  2. perfis/id 
      GET → id, nome e e-mail, pode_convidar | Recupera usuário com id informado

### Vídeo 2

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

TODO:
1. Vincular vídeo explicando os decoradores em Python.
  1. Selecionar um vídeo:  [https://www.youtube.com/results?search_query=decorador+python](https://www.youtube.com/results?search_query=decorador+python)
  2. Como funcionam decoradores em Python?](https://pt.stackoverflow.com/questions/23628/como-funcionam-decoradores-em-python)

### Vídeo 3 e 4

5. Criar arquivo `serializers.py`  na pasta perfil
6. Criar classe ContatoSerializer
7. Criar classe PerfilSerializer
    1. Adicionar campos de email e password para criar um usuário no momento de criação do Perfil
    2. Modificar método create
    3. Adicionar no método create a criação do token
8. Criar classe PerfilSimplificadoSerializer
    1. Adicionar campo pode_convidar - para verificar se o perfil já faz parte dos contatos
9. Criar classe ConviteSerializer
10. No arquivo [`views.py`](http://views.py):
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

13. Atualizar modelos (por quê?)

`python [manage.py](http://manage.py) makemigrations` (apenas para verificar)

`python [manage.py](http://manage.py) migrate`

14. Realizar o commit e push para o envio dos códigos da api para o repositório GitHub

`git commit -m "mensagem de identificação do commit"`

`git push -u origin api`

Tempo previsto para execução  2 horas

### Proxy para o git
- Ativa: _git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port_
- Remove: _git config --global --unset http.proxy_
