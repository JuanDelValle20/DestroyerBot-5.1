const group = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *GROUP*
  │
  ├─ ❏ ${prefix}opengc
  ├─ ❏ ${prefix}closegc
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}tagall3
  ├─ ❏ ${prefix}tagall4
  ├─ ❏ ${prefix}tagall5
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}hakai
  ├─ ❏ ${prefix}listadmins
  ├─ ❏ ${prefix}linkgroup
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}welcome
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}delete
  └─ ❏ ${prefix}ownergroup`
}
exports.group = group
