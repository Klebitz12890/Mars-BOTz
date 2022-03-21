import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('amel', '/cerpen', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.judul, json.cerita, fla + 'cerpen', instagram, 'Instagram', null, null, [
      ['Next', `${usedPrefix+command}`],
      [null, null],
      [null, null]
], m, {asLocation: true})
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i

export default handler