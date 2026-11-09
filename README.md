## Req.

- Node.js 18 ou superior
- Um bot criado no [Discord Developer Portal](https://discord.com/developers/applications) (tu não sabe criar? Então aprenda...)

## Configurando o .env

1. copie

```bash
cp .env.example .env
```

2. Abra o `.env` e cole o token do seu bot:

```env
DISCORD_TOKEN=seu_token_aqui (é fácil pegar o token)
```

Para pegar o token:

1. Acesse o Developer Portal e abra (ou crie) a sua aplicação.
2. Vá na aba Bot.
3. Clique em Reset Token e copie o valor.
4. Cole no arquivo na variável.

Se tu quiser vazar o token postando um repositório no github só não usar gitignore

## Add o bot (tu não sabe nem essa parte?)

1. No Developer Portal, vá em OAuth2 e depois em URL Generator.
2. Marque o escopo bot.
3. Copie o link gerado, abra no navegador e escolha o servidor.

## Rodando

```bash
npm install
npm start
```

Para reiniciar sozinho a cada alteração no código:

```bash
npm run dev
```

> ⚠️ Lembrando isso é um bot base não é um bot com 1000 comandos com só isso de arquivo ;-;

😘 Créditos para Shaq

https://discord.gg/Gxc4KPQfeR
