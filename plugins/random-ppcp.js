import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
  let res = await fetch(API('lolhuman', '/api/random/ppcouple', {}, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, null, 'Cewe', m)
conn.sendButton(m.chat, 'Cowo', wm, json.result.male, ['Next', `${usedPrefix+command}`], m)

}
handler.help = ['ppcouple']
handler.tags = ['random']
handler.command = /^(ppcp|ppcouple)$/i


export default handler
