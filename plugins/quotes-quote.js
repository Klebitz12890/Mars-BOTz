import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/quotes', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.result.by, json.result.quote, fla + 'quotes', instagram, 'Instagram', null, null, [
      ['Next', `${usedPrefix+command}`],
      [null, null],
      [null, null]
], m, {asLocation: true})
}
handler.help = ['quote']
handler.tags = ['quotes']
handler.command = /^(quote)$/i

export default handler
