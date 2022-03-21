import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = `https://api.lolhuman.xyz/api/random/cecan?apikey=rey2k22`
conn.sendButton(m.chat, 'wangy wangy', wm, res, ['Next', `${usedPrefix+command}`], m)
}
handler.help = ['cecan']
handler.tags = ['random']
handler.command = /^(cecan)$/i

export default handler
