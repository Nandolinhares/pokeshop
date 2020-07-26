![poke](https://user-images.githubusercontent.com/15971419/88488950-63226100-cf67-11ea-8ef8-3dece7cac70c.png) ![pikach(1)](https://user-images.githubusercontent.com/15971419/88489051-3ae73200-cf68-11ea-8221-0e7be9fe3e2d.png)
## Bem Vindos a Pokeshop - Nossa loja Pokemon

Olá, meu nome é Fernando e venho apresentar a minha solução para o desafio proposto. Ela se chama Pokeshop. Nela, eu foquei em 2 lojas do tipo (Planta e Água).
Seguindo o modle da B2W Digital, eu fiz uma base de código pricipal, aonde as 2 lojas se diferem em estilo. Para captar os dados, usei a PokeApi.

## Funcionalidades
 - Na Pokeshop, o usuário poderá ver conhecer todos os Pokemon a venda, cada um com seus respectivos atributos. São eles: Imagem, nome, avaliação e preço.
Sendo que tanto a avaliação quanto o preço são determinados aleatoriamente ao carregar a página.

- O usuário poderá adicionar os Pokemon ao carrinho de compras e removê-lo. Se adicionar o mesmo Pokemon mais de uma vez, o atributo quantidade será incrementado.
 Da mesma forma, ao remover, se houver mais de um, irá remover a quantidade que quiser.
 
- O usuário poderá buscar pelo Pokemon que deseja na busca em tempo real na barra de busca e adicionar ao carrinho de lá mesmo, se quiser.

- O preço total é alterado a cada alteração no carrinho de compras. Ou seja, tanto adições quanto subtrações de Pokemon serão contabilizados, para garantir a segurança do valor final.

- Ao clicar em comprar, o usuário é redirecionado para a página Resumo do carrinho, onde poderá ver todos os Pokemon selecionados, ver o preço total e poderá finalizar a compra. Além disso, ele ainda poderá remover algum Pokemon do carrinho, se mudar de ideia e continuar para compra.

- Ao finalizar a compra, um modal será aberto mostrando agradecimentos e após fechar o usuário ser redirecionado para a página de origem.

- Após isso, o usuário poderá notar que o ícone de Notificações no header apresentará algo novo. Quando clicar, poderá ver as compras que já fez no site. Basicamento vai mostrar um array contendo os objetos(as compras) que já foram efetuadas no site. 
 
 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
