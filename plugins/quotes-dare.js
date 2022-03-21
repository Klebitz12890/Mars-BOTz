import { dare } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendHydrated(m.chat, dare(), wm, fla + 'dare', instagram, 'Instagram', null, null, [
      ['Dare', '.dare'],
      ['Truth', '.truth']
], m, {asLocation: true})

handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i

export default handler
