let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('unban berhasil')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|unban$/i
handler.owner = true

export default handler