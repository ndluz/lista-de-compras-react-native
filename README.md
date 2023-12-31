﻿# Lista de Compras 
![Capa](./readme-assets/logo.png)

# Sobre o projeto
Lista de Compras é um aplicativo mobile que eu fiz com o intuito de aplicar os meus conhecimentos de JavaScript utilizando a biblioteca React Native.

A motivação do projeto era pegar um problema simples e tentar resolvê-lo com o que eu venho estudando.

Sempre que vou fazer compras no supermercado eu faço listas (algumas vezes no papel, outras em um grupo do WhatsApp que só tem eu mesmo) com tudo que eu preciso comprar. Conforme eu adiciono os produtos no carrinho, fico saindo da minha lista do WhatsApp (quando utilizo o celular), entro na calculadora e faço o somatório dos valores.

Para resolver isso, a minha solução foi centralizar a lista de compras, a possibilidade de eu adicionar os produtos, as quantidades que desejo levar e, por fim, contabilizar o preço total de todos os produtos.

## Demo
![Demo](./readme-assets/demo.gif)

# Funcionalidades
- Adicionar um produto à lista
- Adicionar a quantidade do produto adicionado:
  - Adiconar a quantidade pelos botões
  - Adicionar  a quantidade pelo teclado
- Confirmar um produto que foi adicionado no carrinho
  - adicionar o preço pelo teclado
- Remover um produto da lista
(ao remover um produto da lista, é descontado o valor do produto multiplicado pela quantidade)
- Limpar toda a lista removendo todos os itens

# Tecnologias utilizadas
- TypeScript
- Expo
- React Native
- StyledComponents

## Como executar o projeto

### Pré-requisitos
Antes de tudo, é preciso cerfiticar-se que você tenha instalado na sua máquina as seguintes ferramentas: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://expo.io/). Para ter acesso ao aplicativo você precisa ter um emulador ou o aplicativo do expo no seu dispositivo para [IOS](https://apps.apple.com/br/app/expo-go/id982107779) ou [Android](https://play.google.com/store/apps/details?id=host.exp.exponent).

### Observação
Eu só consegui testar o aplicativo na vesão android, pois não tenho um MacBook ou um Iphone para poder testar.

## Início

```bash
# Clone este repositório
$ git clone https://github.com/ndluz/lista-de-compras-react-native

# na pasta do repositório instale as dependências
$ npm install

# Inicialize com
$ npx expo start

# Logo após aparecerá um QRcode

# Abra o aplicativo do Expo no seu dispositivo e escaneie o QRcoe que aparecerá no seu terminal

# ou

# Aperte a tecla A para abrir o emulador do android, caso você tenha instalado na sua máquina.
```
# Autor

Anderson Barbosa Luz

https://www.linkedin.com/in/anderson-barbosa-luz/