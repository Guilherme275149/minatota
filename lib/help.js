const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `「 *MINATO BOT* 」
◪ *Sobre O Minato*
  ❏ Dono : MINATO YT 😳
  ❏ Whatsapp Do Meu Dono : wa.me/6281281872699
  ❏ Youtube : https://youtube.com/channel/UCWZKMTuAI8t4ENaCftJxqQw
  ----------------------------------
◪ *SOBRE O BOT*
  ❏ Nome : Minato
  ❏ WhatsApp Do Meu Criador WA.me//5511934488829
  ❏ Tá Com Problema Contate A Ele 
  ----------------------------------
◪ *Sua Informação *
  ❏ Prefix : 「  ${prefix}  」
  ❏ Nome : ${pushname}
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
  ├─ ❏ ${prefix}buypremium [Compra Prêmio 
  ├─ ❏ ${prefix}hargaprem [Valor Premio
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner
  
◪ *BASICO*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker [Transforma Imagem Em Fig] 
  ├─ ❏ ${prefix}stickergif [Transforma Gif Em Fig Animado
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}imgmaker
  └─ ❏ ${prefix}calendermaker
  
◪ *MEDIA*
  │
  └─ ❏ ${prefix}tribunews
  
◪ *OUTROS RECURSOS*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [Seu Texto]
  ├─ ❏ ${prefix}alay [Seu Texto]
  ├─ ❏ ${prefix}say [Seu Texto]
  ├─ ❏ ${prefix}wiki [Seu Texto ]
  ├─ ❏ ${prefix}kbbi [Seu Texto]
  ├─ ❏ ${prefix}map [Seu Texto]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}lirik [Seu Texto ]
  ├─ ❏ ${prefix}brainly [Seu Texto]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [Seu Texto]
  ├─ ❏ ${prefix}katabijak 
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama [Seu Texto]
  
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}sangecek
  ├─ ❏ ${prefix}gaycek
  ├─ ❏ ${prefix}lesbicek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  ├─ ❏ ${prefix}bagaimanakah
  └─ ❏ ${prefix}rate
  
◪ *DOWNLOAD*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [Seu Texto ]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}play [Seu Texto]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [Seu Texto]
  
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo ❌
  
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
  
◪ *IMAGEM ALEATÓRIA DE AMIME*
  │ 
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *RANDOM KPOP*
  ├─ ❏ ${prefix}randomkpop
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}quotesnasehat
  ├─ ❏ ${prefix}quotescinta ❌
  ├─ ❏ ${prefix}quotesmotivasi
  ├─ ❏ ${prefix}animequotes ❌
  └─ ❏ ${prefix}twichquotes ❌
  

◪ *LIMIT & DINHEIRO & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GRUPO*
  │
  ├─ ❏ ${prefix}promote [Promove Membro Pra Admin @tag]
  ├─ ❏ ${prefix}demote [Remove Admin@tag]
  ├─ ❏ ${prefix}tagall [Marco Todos Os Membros 
  ├─ ❏ ${prefix}listadmin [Lista De Admin] 
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist [Lista De Membros Premium] 
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist [Lista De Bloqueado] 
  ├─ ❏ ${prefix}linkgc [Link Do Grupo] 
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [Número Que Deseja Add Ex 55119344xxxxx]
  ├─ ❏ ${prefix}kick [Marque Elvo Que Deseja Remove @tag]
  ├─ ❏ ${prefix}setname [Muda Nome Do Grupo] 
  ├─ ❏ ${prefix}setdesc [Muda Desc Do Grupo] 
  ├─ ❏ ${prefix}setpp [Marque Uma Imagem] 
  ├─ ❏ ${prefix}listadmin [Lista De Admin
  ├─ ❏ ${prefix}linkgc [Link Do Grupo] 
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup) [Buka Fecha O Grupo/Tutup Fecha O Grupo] 
  ├─ ❏ ${prefix}welcome [1/0] Comando De Bem Vindo] 
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0] [Ativa Antilink] 
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  └─ ❏ ${prefix}desliga [Só Para Dono] 
  └─ ❏ ${prefix}antiracismo [1/0]
  
◪ *SOM*
  │
  ├─ ❏ ${prefix}oi
  ├─ ❏ ${prefix}hallo [only computer]
  ├─ ❏ ${prefix}aine
  ├─ ❏ ${prefix}soundplaydate [only computer]
  ├─ ❏ ${prefix}soundbakahentai [only computer]
  ├─ ❏ ${prefix}sayonichan [only computer]
  └─ ❏ ${prefix}gtts
  
◪ *ISLAM*
  │
  └─ ❏ ${prefix}quran
  
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
  
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}wait
  
◪ *APK*
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  ├─ ❏ ${prefix}moddroid [teks]
  
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob
  ├─ ❏ ${prefix}randomhentai
  └─ ❏ ${prefix}nsfwneko
  
◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}tampar
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  └─ ❏ ${prefix}simi
  
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  └─ ❏ ${prefix}covid ❌
  
◪ *PROPRIETÁRIO*
  │
  ├─ ❏ ${prefix}setprefix [Mude O Prefixo Do BOT] 
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block [Marque Alvo Que Deseja Da Block @tag] 
  ├─ ❏ ${prefix}unblock [Marque Alvo Que Deseja Desbloquear @tag] 
  ├─ ❏ ${prefix}setprefix [Muda O Prefixo Do BOT]
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc [Manda Uma Transmissão Pro Chat] 
  ├─ ❏ ${prefix}bcgc [Manda Uma Transmissão Pro GP] 
  ├─ ❏ ${prefix}clone [Marque Alvo Que Deseja Clona O Perfil @Tag] 
  └─ ❏ ${prefix}clearall [Limpa O Chat Do BOT] 
  └─ ❏ ${prefix}desliga [1/0] só para dono 
  
  
◪ *OUTROS*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
  
◪ *Eo Minato Tá? *
`
}
exports.help = help



  
