require("dotenv").config()
const { Client, Events, GatewayIntentBits } = require("discord.js")

const token = process.env.DISCORD_TOKEN

if (!token) {
  console.error("DISCORD_TOKEN não encontrado no .env")
  process.exit(1)
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (readyClient) => {
  console.log(`🤖 ${readyClient.user.tag}`)
})

client.login(token)
