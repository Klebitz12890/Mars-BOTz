import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendButton(m.chat, `
*── 「 WALLPAPER 」 ──*`.trim(), wm, img, ['Next', `${usedPrefix+commad} ${text}`], m)
}
handler.help = ['wallpaper'].map(v => v + '<query>')
handler.tags = ['internet']

handler.command = /^(wallpaper)$/i

export default handler