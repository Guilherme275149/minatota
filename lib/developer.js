const developer = (prefix) => { 
	return `「 *SHIZUKA BOT* 」
◪ *Informação Do Desenvolvedor*
  ❏ Dono: Minato YT 😳
  ❏ WhatsApp : wa.me/5511934488829
  ❏ YouTube : https://youtube.com/channel/UCWZKMTuAI8t4ENaCftJxqQw
  ----------------------------------
◪ *Informação Do MINATO*
  ❏ Nome : Minato
  ❏ WhatsApp Do Meu Criador WA.me//5511934488829
  ❏ Tá Com Problema Contate A Ele
  ----------------------------------
◪ *Sua Informação *
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nome: ${pushname}
  ❏ Número : ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
  
◪ *GERAL*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist [Lista De Bloqueado] 
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  └─ ❏ ${prefix}gcshizuka     
  
◪ *Proprietário*
  │
  ├─ ❏ ${prefix}setprefix [Muda Prefixo Do BOT] 
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setlimit [Ver Limite Acho Que Er Isso] 
  ├─ ❏ ${prefix}addlimit [Add Limite Kskssk
  ├─ ❏ ${prefix}giftlimit
  ├─ ❏ ${prefix}setmemlimit
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}premium
  ├─ ❏ ${prefix}unpremium
  ├─ ❏ ${prefix}admin
  ├─ ❏ ${prefix}unadmin
  ├─ ❏ ${prefix}ban [Marque Alvo Que Deseja Da Ban EX @Tag]
  ├─ ❏ ${prefix}unban [Marque Alvo Ex @Tag]
  ├─ ❏ ${prefix}bc Manda Transmissão Pra Pv
  ├─ ❏ ${prefix}block [Marque Alvo Que Deseja Da Block EX @Tah]
  ├─ ❏ ${prefix}unblock Marque Alvo Que Deseja Desbloquear Ex @tag] 
  ├─ ❏ ${prefix}setprefix [Muda Prefixo Do BOT] 
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}clone [ Marca Alvo Que Deseja Clona] 
  └─ ❏ ${prefix}clearall [Limpa O Chat Do BOT] 
  
◪ *ADMIN*
  │
  ├─ ❏ ${prefix}event
  ├─ ❏ ${prefix}bcc
  ├─ ❏ ${prefix}bann
  ├─ ❏ ${prefix}unbann
  ├─ ❏ ${prefix}blockk
  ├─ ❏ ${prefix}unblockk
  └─ ❏ ${prefix}giftlimit`
}

exports.developer = developer
