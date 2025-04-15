# 🧽 Fenda do Biquíni Canecas

Este é um projeto acadêmico fictício que simula uma loja virtual de canecas personalizadas inspiradas no universo do Bob Esponja. O objetivo foi integrar diferentes tecnologias web — HTML, CSS, JavaScript e PHP — com um banco de dados MySQL para criar uma aplicação web funcional.

---

## Objetivo

Desenvolver um site completo de e-commerce fictício utilizando habilidades adquiridas ao longo do curso, com foco na criação de um sistema que simula:

- Catálogo de produtos (canecas)
- Carrinho de compras
- Sistema de cadastro e login de clientes
- Integração com banco de dados via PHP (CRUD)
- Buscas dinâmicas e interatividade com JavaScript

---

## Tecnologias Utilizadas

| Tecnologia  | Função                                                                 |
|-------------|------------------------------------------------------------------------|
| HTML5       | Estrutura das páginas (home, produtos, login, carrinho, etc.)         |
| CSS3        | Estilização visual (cores, layout, responsividade)                    |
| JavaScript  | Funcionalidades dinâmicas como busca, adição e remoção do carrinho    |
| PHP         | Backend, integração com o banco de dados, operações de CRUD           |
| MySQL       | Armazenamento dos dados (clientes, produtos, carrinho)                |

---

## Estrutura do Projeto

Estrutura do Projeto
```
/Fenda do Biquini
├── index.html                 # Página principal (abertura do site)
├── style/                     # Estilos CSS
│   ├── style.css              # Página principal
│   ├── pag-adm.css            # Design página do admin
│   ├── cadastrar.css          # Design página de cadastro de produtos
│   ├── carrinho.css           # Design do carrinho
│   ├── pagamento.css          # Design página de pagamento
│   ├── cadastro.css           # Design de cadastro de pessoas
│   └── apagar.css             # Design página de exclusão

├── html/                      # Outras páginas HTML
│   ├── piques.html            # Página com QR code (fictício) do Pix
│   ├── carrinho.html          # Página do carrinho
│   ├── pag-cartao.html        # Página do pagamento com cartão (fictício)
│   ├── pagamento.html         # Página para selecionar a forma de pagamento
│   ├── cadastrar.html         # Página para cadastrar produto
│   ├── compra-realizada.html  # Página que informa compra realizada
│   ├── pag-adm.html           # Página do administrador
│   └── excluir.html           # Página de exclusão

├── img/                       # Imagens utilizadas no site
│   └── (canecas, personagens, ícones, etc.)

├── js/                        # Scripts JavaScript
│   ├── carrinho.js            # Script do carrinho
│   ├── buscarcarrinho.js      # Script para buscar carrinho
│   ├── index.js               # Script da página principal
│   ├── buscar.js              # Script para buscar itens
│   ├── excluir.js             # Script para excluir itens
│   └── cadastrar.js           # Script de cadastro

└── php/                       # Arquivos PHP responsáveis pelo backend
    ├── carrinho.php
    ├── buscarcarrinho.php
    ├── index.php
    ├── buscar.php
    ├── excluir.php
    └── cadastrar.php
```

---

## Funcionalidades

- ✅ Cadastro e login de usuários
- ✅ Visualização de produtos (canecas)
- ✅ Busca de produtos por nome
- ✅ Adição e remoção de produtos no carrinho
- ✅ Simulação de compra (sem pagamento real)
- ✅ CRUD completo no backend com PHP

---

## Banco de Dados

O banco de dados se chama `bob_esponja` e contém as seguintes tabelas principais:

- `cliente` — usuários da loja
- `produtos` — canecas disponíveis
- `carrinho` — produtos adicionados pelos usuários

> O script para criação está disponível no diretório `bob_esponja.sql`

---

## Como Executar o Projeto

1. Clone ou baixe este repositório.
2. Importe o arquivo `bob_esponja.sql` no MySQL Workbench.
3. Coloque os arquivos em um servidor local (ex: XAMPP ou WAMP).
4. Acesse `localhost/loja-bob-esponja/index.html` no navegador.
5. Navegue pelo site, cadastre-se, adicione produtos ao carrinho e explore as funcionalidades.

---

## Desenvolvido por

Mariana de Castro e Tarso Bertolini


Projeto fictício desenvolvido como atividade acadêmica para prática das tecnologias web front-end e back-end.



