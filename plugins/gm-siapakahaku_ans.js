import similarity from 'similarity'
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*who/i.test(m.quoted.contentText)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return m.reply('Siapakah Aku telah berakhir')
    if (m.quoted.id == this.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
        if (['.who', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.result.answer.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.siapakahaku[id][2]
            await this.sendButton(m.chat, `benar mendapatkan +${this.siapakahaku[id][2]} XP`, wm, ['Siapakah Aku', '.siapaaku'], m)
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.result.answer.toLowerCase().trim()) >= threshold) m.reply('hampir')
        else m.reply('salah blokk banget')
    }
    return !0
}
export default handler