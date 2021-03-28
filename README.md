# Front-end com React

## [Vídeo 1 ~33 min - Configuração inicial do projeto React e ajustes no projeto do back-end](https://youtu.be/urluEm7UHsE)

1. Download do Projeto Inicial do front-end
    1. Fazer download da TAG: [https://github.com/oliveirafhm/experiencein/releases/tag/frontend-v0.1-alpha](https://github.com/oliveirafhm/experiencein/releases/tag/frontend-v0.1-alpha), e utilizar de base para o desenvolvimento do front-end com React
2. Instalação das dependências
    1. *cd front-end*
    2. *npm install*
3. Configurações de Backend
    1. Adicionar biblioteca para correção de funcionamento do CORS   
    *pip install django-cors-headers*  
    mais informações no artigo: [How to Fix Django CORS Error](https://dzone.com/articles/how-to-fix-django-cors-error).
    2. Adicionar biblioteca ao `settings.py`   
    ``` python
    INSTALLED_APPS = [
    ... ,
    'corsheaders'
    ]

    MIDDLEWARE = [
      ... ,
      'corsheaders.middleware.CorsMiddleware'
    ]

    ...

    ALLOWED_HOSTS = ['localhost']

    CORS_ORIGIN_ALLOW_ALL = False  
    CORS_ORIGIN_WHITELIST = (
        'http://localhost:3000',
    )
    ```
    
## [Vídeo 2 ~49 min - Introdução ao React e tela de login](https://youtu.be/rESsyIn2GGw)

4. Explicação sobre a estrutura de pastas do projeto
5. Explicação componentes
    1. [Introdução a JSX](https://reactjs.org/docs/introducing-jsx.html)
6. Routes
7. Login Form
    1. [Eventos do DOM (Document Object Model)](https://developer.mozilla.org/pt-BR/docs/Web/Events) 
    2. [Introdução aos Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)

## [Vídeo 3 ~52 min - Formulário de cadastro e comunicação com a API](https://youtu.be/r4wfJBuWDEY)

8. Cadastro de novo usuário na rede
9. Enviando dados a API
    1. Lista de endpoints: [https://github.com/oliveirafhm/experiencein/tree/api](https://github.com/oliveirafhm/experiencein/tree/api)
10. Armazenando token em local storage

## [Vídeo 4 ~78 min - Lista de perfis e envio de convites](https://youtu.be/szzsUxWcdBA)

11. Recebendo perfis da API
    1. [Documentação sobre *useEffect*](https://pt-br.reactjs.org/docs/hooks-effect.html)
12. Criando interface para listar perfis
13. Criando componente para enviar convite

## Vídeo 5 ~xx min - Aceitando convites e exibindo a lista de contatos

14. Exibindo a lista de convites
    1. Documentação sobre a função *some()*
15. Criando componente para aceitar convite
16. Mostrar a lista de contatos

## Recursos extras

1. [Ferramenta para prototipagem das telas e criação dos estilos](https://stackblitz.com/)
2. [Intro to react Hooks - Cassidy Williams](https://www.youtube.com/watch?v=xpOnNqg7EPs&ab_channel=WizelineAcademy)
3. [Virtual DOM](https://pt-br.reactjs.org/docs/faq-internals.html)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
