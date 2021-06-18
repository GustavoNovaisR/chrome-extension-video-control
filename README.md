<div align="center">
    <span>chrome extension</span>
    <h1>Video Control</h1>    
    <img src="https://user-images.githubusercontent.com/48394324/122485420-3aef8680-cfad-11eb-8eea-f28fd30f88d8.png">
</div>

<br>

> ![badge](https://img.shields.io/badge/node-v14.15.4-blue) > ![badge](https://img.shields.io/badge/npm-v7.8.0-blue) > ![badge](https://img.shields.io/badge/manifest-v3-blue) > ![badge](https://img.shields.io/badge/typescript-v4.7.2-blue) > ![badge](https://img.shields.io/badge/webpack-v5.38.1-blue) > ![badge](https://img.shields.io/badge/babel-v8.2.2-blue) > ![badge](https://img.shields.io/badge/VersionProject-v1.0.0-green)

## Tabela de conteúdos

- [Sobre](#Sobre)
- <a href="#instalacaor">Instalação do projeto</a>
- <a href="#como-usar">Como usar a extensão</a>
- <a href="#funcionalidades">Funcionalidades</a>
- <a href="#hotkeys">Hotkeys</a>
- <a href="#tecnologias">Tecnologias</a>

<hr>

## Sobre

Extensão para controlar os vídeos com hotkeys, controles de vídeo e velocidade.

<hr>
<h2 id="instalacao">Instalação do projeto</h2>

```bash
# Clone este repositório
$ git clone https://github.com/GustavoNovaisR/chrome-extension-video-control

# Acesse a pasta do projeto no terminal/cmd
$ cd chrome-extension-video-control

# Instale as dependências
$ npm install

# Execute o build para gerar a pasta de produção "dist"
$ npm run build
```

<hr>
<h2 id="como-usar">Como usar a extensão</h2>

Vá em Configurações > Mais ferramentas > Extensões

![instalar-1](https://user-images.githubusercontent.com/48394324/122481135-8b161b00-cfa4-11eb-85ed-5742fcbc31df.png)

Habilite o "Modo do desenvolvedor"

![instalar-2](https://user-images.githubusercontent.com/48394324/122481181-9a956400-cfa4-11eb-88d6-96d4945a732a.png)

Clique "Carregar sem compactação" e selecione a pasta "dist" do projeto

![instalar-3](https://user-images.githubusercontent.com/48394324/122481202-a719bc80-cfa4-11eb-992c-b309a7e0bcfb.png)

<hr>
<h2 id="funcionalidades">Funcionalidades</h2>

- Controles de video

  - ▶/II: play, pause
  - Avançar: +5s, +10s
  - Voltar: -5s, -10s

- Controles de velocidade do video

  - Adicionar: +0.25 ↷
  - Diminuir: -0.25 ↶
  - Adicionar: +1
  - Diminuir: -1
  - Atualizar velocidade salva: ↺

<hr>
<h2 id="hotkeys">Hotkeys</h2>
  <table>
    <tr>
          <th>Hotkey</th>
          <th>Action</th>
    </tr>
    <tr>
          <td>j</td>
          <td>:voltar -5s</td>
    </tr>
    <tr>
          <td>k</td>
          <td>:play/pause</td>
    </tr>
    <tr>
          <td>l</td>
          <td>:avançar +5s</td>
    </tr>
    <tr>
          <td>,</td>
          <td>:diminuir velocidade -0.25</td>
    </tr>
    <tr>
          <td>.</td>
          <td>:adicionar velocidade +0.25</td>
    </tr>
    <tr>
          <td>↑</td>
          <td>:aumentar volume +5%</td>
    </tr>
    <tr>
          <td>↓</td>
          <td>:diminuir velocidade -5%</td>
    </tr>
    <tr>
          <td>→</td>
          <td>:avançar +5s</td>
    </tr>
    <tr>
          <td>←</td>
          <td>:voltar -5s</td>
    </tr>
    </table>

**_Cancelamento das hotkeys da extensão no site do youtube_**

<h2 id="tecnologias">🛠 Tecnologias</h2>
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org)
- [babel](https://babeljs.io)
