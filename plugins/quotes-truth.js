import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendHydrated(m.chat, truth(), wm, fla + 'truth', instagram, 'Instagram', null, null, [
      ['Truth', '.truth'],
      ['Dare', '.dare']
], m, {asLocation: true})

handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truth)$/i

export default handler