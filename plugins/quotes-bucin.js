import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/bucin', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.result, wm, fla + 'bucin', instagram, 'Instagram', null, null, ['Next', `${usedPrefix + command}`], m, {asLocation: true})
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i

export default handler
