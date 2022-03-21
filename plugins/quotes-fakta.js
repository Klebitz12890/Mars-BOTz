import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/faktaunik', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.result, wm, fla + 'fakta', instagram, 'Instagram', null, null, [
      ['Next', `${usedPrefix+command}`],
      [null, null],
      [null, null]
], m, {asLocation: true})
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i

export default handler
