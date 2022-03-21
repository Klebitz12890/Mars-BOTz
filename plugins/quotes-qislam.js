import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/islami', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.result, wm, fla + 'qislam', instagram, 'Instagram', null, null, [
      ['Next', `${usedPrefix+command}`],
      [null, null],
      [null, null]
], m, {asLocation: true})
}
handler.help = ['qislam']
handler.tags = ['quotes']
handler.command = /^(qislam)$/i

export default handler
