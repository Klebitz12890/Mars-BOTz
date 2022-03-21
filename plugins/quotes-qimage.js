import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = `https://api.lolhuman.xyz/api/random/quotesimage?apikey=rey2k22`
conn.sendButton(m.chat, 'hidupmu terlalu dark', wm, res, ['Next', `${usedPrefix+command}`], m)
}
handler.help = ['qimage']
handler.tags = ['quotes']
handler.command = /^(qimage)$/i

export default handler
