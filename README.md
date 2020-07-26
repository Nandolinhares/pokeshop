![poke](https://user-images.githubusercontent.com/15971419/88488950-63226100-cf67-11ea-8ef8-3dece7cac70c.png) ![pikach(1)](https://user-images.githubusercontent.com/15971419/88489051-3ae73200-cf68-11ea-8221-0e7be9fe3e2d.png)

## Executar

Para acessar a Pokeshop, você tem 2 maneiras. Uma é a internet e a outra é o modo local. 

### Acessar Online
A Pokeshop foi hospedada usando o Hosting do Firebase. Por isso, acesse https://pokeshop-db53e.web.app/ 

### Acessar Local

### `git clone https://github.com/Nandolinhares/pokeshop.git`
### `yarn install`
### `yarn start`

## Bem Vindos a Pokeshop - Nossa loja Pokemon

Olá, meu nome é Fernando e venho apresentar a minha solução para o desafio proposto. Ela se chama Pokeshop. Nela, eu foquei em 2 lojas do tipo (Planta e Água).
Seguindo o modle da B2W Digital, eu fiz uma base de código pricipal, aonde as 2 lojas se diferem em estilo. Para captar os dados, usei a PokeApi. A Pokeshop foi planejada de maneira responsiva, compativel com os mais variados tamanhos de tela, sejam celulares, tablets ou computadores.

### Pokeshop do tipo Planta
![image](https://user-images.githubusercontent.com/15971419/88489509-0032c900-cf6b-11ea-9b0a-e7331376c512.png)

### Pokeshop do tipo Água
![image](https://user-images.githubusercontent.com/15971419/88489562-48ea8200-cf6b-11ea-9767-304c3ab3381f.png)

## Funcionalidades
 - Na Pokeshop, o usuário poderá ver conhecer todos os Pokemon a venda, cada um com seus respectivos atributos. São eles: Imagem, nome, avaliação e preço.
Sendo que tanto a avaliação quanto o preço são determinados aleatoriamente ao carregar a página.

- O uuário poderá navegar entra lojas clicando no botão select e clicando em Ok. Assim, poderá navegar entre as lojas de forma bem simples.

- O usuário poderá adicionar os Pokemon ao carrinho de compras e removê-lo. Se adicionar o mesmo Pokemon mais de uma vez, o atributo quantidade será incrementado.
 Da mesma forma, ao remover, se houver mais de um, irá remover a quantidade que quiser.
 
- O usuário poderá buscar pelo Pokemon que deseja na busca em tempo real na barra de busca e adicionar ao carrinho de lá mesmo, se quiser.

- Ao abrir a página, o usuário poderá ver os 12 primeiros Pokemon. Se desejar ver mais, basta clicar no botão Carregar mais, onde a cada carregamento serão trazios mais 12 Pokemon. Ele poderá ver todos os Pokemon até chegar ao final.

- O preço total é alterado a cada alteração no carrinho de compras. Ou seja, tanto adições quanto subtrações de Pokemon serão contabilizados, para garantir a segurança do valor final.

- Ao clicar em comprar, o usuário é redirecionado para a página Resumo do carrinho, onde poderá ver todos os Pokemon selecionados, ver o preço total e poderá finalizar a compra. Além disso, ele ainda poderá remover algum Pokemon do carrinho, se mudar de ideia e continuar para compra.

- Ao finalizar a compra, um modal será aberto mostrando agradecimentos e após fechar o usuário ser redirecionado para a página de origem.

- Após isso, o usuário poderá notar que o ícone de Notificações no header apresentará algo novo. Quando clicar, poderá ver as compras que já fez no site. Basicamento vai mostrar um array contendo os objetos(as compras) que já foram efetuadas no site. 
 
## Resumo da Compra
Nessa página, o usuário poderá ver os Pokemon já adicionados e poderá escolher entre a finalização da compra ou remover algum dos já selecionados antes.

![image](https://user-images.githubusercontent.com/15971419/88489755-b64ae280-cf6c-11ea-9eb1-e6355c99b99d.png)

Ao clicar em finalizar, ele poderá ver o modal de agradecimento e será redirecionado para a página inicial para comprar mais Pokemon.

![image](https://user-images.githubusercontent.com/15971419/88489720-6409c180-cf6c-11ea-942e-c4d2323385c1.png)

## Salvando dados da compra
Após finalizar a compra, o ícone de notificações estará ativo com um badge vermelho indicando um número. Esse número, está relacionado ao número de compras que o usuário já fez no site. Ao clicar nele, o comprador poderá visualizar todas as compras já feitas no site.

![image](https://user-images.githubusercontent.com/15971419/88489813-2d807680-cf6d-11ea-88c5-b66615165c64.png)
Ao acessar, poderá ser visto todas as compras já feitas no site, mesmo se atualizar. Os dados foram salvos no local storage

![image](https://user-images.githubusercontent.com/15971419/88489857-7a644d00-cf6d-11ea-9745-166828a66eed.png)

![image](https://user-images.githubusercontent.com/15971419/88489863-97991b80-cf6d-11ea-859f-2d1a2876e303.png)

## Busca
Ao digitar o nome do Pokemon, serão mostrados em tempo real os Pokemon relacionados com o que foi digitado. Eu criei uma solução bem manual a principío. Utilizei o onChange no input e usei o Redux para receber os parâmetros de pesquisa. Usei a função startsWith(searchParams), para fazer o match do que foi digitado com os Pokemon coletados na PokeApi.

![image](https://user-images.githubusercontent.com/15971419/88490110-8224f100-cf6f-11ea-9864-a2cfbc8eef55.png)

## Responsividade
A Pokeshop foi planejada para os diversos tamanhos de tela e dispositivos.

### Celulares
![image](https://user-images.githubusercontent.com/15971419/88489987-93213280-cf6e-11ea-9f5c-c53c76aa3aa5.png)

### Tablets
![image](https://user-images.githubusercontent.com/15971419/88490011-bea41d00-cf6e-11ea-9eaa-ccc4ed0e912a.png)

