let handler = function (m) {
  // this.sendContact(m.chat, '524444066685', 'Nurutomo', m)
  this.sendContact(m.chat, '524444066685', '👑leonel👑', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
