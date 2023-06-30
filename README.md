# checkpoint II 

Desesnvolvedores wesley bueno e leticia ferreira. 

Projeto criado para a avaliacao final de front end, cujo o objetivo é criar uma aplicação web Rick and Morty. Esta aplicação devera ter
duas páginas com funcionalidades diferentes, mas ao mesmo tempo, estarão relacionadas uma com a outra.


requisitos:

Deve ser desenvolvido utilizando o Typescript como linguagem.

O projeto deve ser desenvolvido usando Redux junto com Thunk ou Saga. É permitido
escolher entre uma das duas. Como requisito mínimo, é esperado o uso correto de um
Reducer, mais o uso de uma função ThunkAction (Thunk) ou função geradora
(Saga).


Funcionalidades obrigatórias
As seguintes funcionalidades são requisitos mínimos para a aprovação final e é essencial
que elas funcionem adequadamente. A aplicação deve ter duas páginas:

● A página inicial, que deve ter:

○ Painel de filtro:
  ■ Ele conterá um input onde o usuário poderá inserir qualquer texto que queira para
3fazer um filtro sobre os personagens.
  ■ Se o usuário apagar o texto inserido, o estado inicial será exibido. Ou seja, a
busca sem filtro.
  ■ Um botão "Limpar filtros" deve ser incluído, que deve limpar o texto dentro do
input e exibir o estado inicial. Ou seja, a busca sem filtro.
○ Lista de personagens
  ■ Deve mostrar os personagens, que serão representados por cards com
informações sobre cada um deles.
  ■ Máximo de nove cards, ou seja nove personagens, por página devem ser
exibidos na tela.
  ■ Deve ser possível marcar e desmarcar cada personagem como favorito de
seu card individual, e este status deve persistir na aplicação.
  ■ Deve ser possível diferenciar se um personagem é marcado como favorito
ou não.


● A página de favoritos, que deve atender aos seguintes requisitos:
  ○ Todos os personagens marcados como favoritos devem aparecer na lista de
favoritos na segunda página do pedido.
  ○ Se o usuário desmarcar um personagem como favorito, ele deverá desaparecer da
lista de favoritos.
  ○ Um personagem que foi desmarcado dos favoritos pode ser marcado novamente a
partir da tela inicial e deve aparecer novamente na lista.
Funcionalidades extras


link da API utilizada: https://rickandmortyapi.com/
