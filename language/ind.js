exports.wait = () => {
	return`*「 ❗ 」 EM PROCESSO * ``
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 NIVELANDO*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 NIVELANDO*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO * ''
}

exports.noregis = () => {
	return`*「 REGISTRE-SE 」*\n\n*Vire Amigo Do Minato   ${prefix}daftar nama|umur* \n*Exemplo ${prefix}daftar Minato|19*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO」*\n\n*Você já está registrado no banco de dados do bot * `
}

exports.stikga = () => {
	return`*Bem, falhe, tente repetir daqui a pouco*`
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*「SÓ GRUPO」*`
}

exports.ownerb = () => {
	return`*「APENAS MINATO PODE USA ESSE COMANDO, DESCULPA😏」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「SOMENTE EM GRUPO 」*`
}

exports.badmin = () => {
	return`*「O BOT TEM QUE SER ADMIN,TÁ ACHANDO QUE SOU MAGICO ER KRLHO」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESLIGADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do MINATO, relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Chat Limpo Com Sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei\n\nNOTE:\n*Se você não entendeu a mensagem.  significa que você não salvou o número do bot * `*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE PAÍS」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade \n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : não se esqueça deste número porque é importante!`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *MINATO BOT * 」
◪ *INFORMAÇÕES *
  ❏ DONO : Minato YT 😳
  ❏ Whatts: wa.me/5511934488829
  ❏ YouTube : https://youtube.com/channel/UCWZKMTuAI8t4ENaCftJxqQw
  ----------------------------------
◪ *INFORMAÇÕES DO BOT*
  ❏ Nama: Minato
  ❏ Whatsap Do Meu Criador : WA.me//5511934488829
  ❏ Tá Com Problema Contate A Ele 
  ----------------------------------
◪ *Sua Informação*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nomd: ${pushname}
  ❏ Numero: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ Registro do usuário : ${_registered.length}
  
◪ *GERAL*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium [Compra Premium
  ├─ ❏ ${prefix}hargaprem [Preço Premium] 
  ├─ ❏ ${prefix}menupict [Foto Do Menu] 
  └─ ❏ ${prefix}menuowner [Menu Do Dono
  
◪ *NOVOS RECURSOS*
  │
  ├─ ❏ ${prefix}nsfwloli
  ├─ ❏ ${prefix}asupan [Ingestão 
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}spamcall [Chamada De Espam] 
  ├─ ❏ ${prefix}tebakgambar [Adivinhe A Imagem] 
  ├─ ❏ ${prefix}babi
  ├─ ❏ ${prefix}caklontong
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}mimpi
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}imagemountain
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}imagegame
  ├─ ❏ ${prefix}imagecyberspace
  ├─ ❏ ${prefix}imageislamic
  ├─ ❏ ${prefix}blackpink
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}randombts
  └─ ❏ ${prefix}menuownerwaifu

◪ *CRIADOR*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker [Transforma Imagem Em Figurinha] 
  ├─ ❏ ${prefix}stickergif [Transforma GIF ou  vídeo de  1a7 segundos Em Figurinha animada] 
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}galaxtext
  ├─ ❏ ${prefix}pupycut
  ├─ ❏ ${prefix}galaxstyle
  ├─ ❏ ${prefix}hologram
  ├─ ❏ ${prefix}textbyname
  ├─ ❏ ${prefix}herrypoter
  ├─ ❏ ${prefix}greanneon
  └─ ❏ ${prefix}metallogo
  
◪ *MEDIA*
  │
  └─ ❏ ${prefix}tribunews
  
◪ *OUTRAS FUNÇÃO*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [Seu Texto]
  ├─ ❏ ${prefix}alay [Seu Texto]
  ├─ ❏ ${prefix}say [Seu Texto]
  ├─ ❏ ${prefix}wiki [Seu Texto]
  ├─ ❏ ${prefix}kbbi [Seu Texto]
  ├─ ❏ ${prefix}map [Seu Texto]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}lirik [Seu Texto]
  ├─ ❏ ${prefix}brainly [Seu Texto]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [Seu Texto]
  ├─ ❏ ${prefix}katabijak 
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}faktaunikl
  ├─ ❏ ${prefix}holoh
  ├─ ❏ ${prefix}halah
  ├─ ❏ ${prefix}huluh
  ├─ ❏ ${prefix}heleh
  ├─ ❏ ${prefix}hurufterbalik
  ├─ ❏ ${prefix}lirik
  ├─ ❏ ${prefix}alay2
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}katadilan
  ├─ ❏ ${prefix}katabucin
  ├─ ❏ ${prefix}katabucin2
  ├─ ❏ ${prefix}cerpen
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}bacotanhacker
  ├─ ❏ ${prefix}quotedoraemon
  ├─ ❏ ${prefix}infofilm
  ├─ ❏ ${prefix}igvideo
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama [teks]
  
◪ *MAGIC SCARS *
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
  ├─ ❏ ${prefix}pinterest [Seu Texto]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}play [Nome Da Música]
  ├─ ❏ ${prefix}fototiktok
  ├─ ❏ ${prefix}igpost [Seu Texto]
  ├─ ❏ ${prefix}igtv
  └─ ❏ ${prefix}joox [Seu Texto]
  
◪ *ENCONTRAR ALVO*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
  
◪ *IMAGEMS ALEATÓRIAS DE ANIME*
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
  │ *ACASO KPOP*
  ├─ ❏ ${prefix}randomkpop
  ├─ ❏ ${prefix}randombts
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}blackpink
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
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}quotesnasehat
  └─ ❏ ${prefix}quotesmotivasi
  

◪ *LIMITE & DINHEIRO & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GRUPO*
  │
  ├─ ❏ ${prefix}promote [Promove Membro Pra Admin @tag]
  ├─ ❏ ${prefix}demote [Remove Admin @tag]
  ├─ ❏ ${prefix}tagall [Marca Membros] 
  ├─ ❏ ${prefix}listadmin [Lista De Admin] 
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist [Lista Premium
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist [Lista De Bloqueados] 
  ├─ ❏ ${prefix}linkgc [Link Do Grpo
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [@55119344xxxxx]
  ├─ ❏ ${prefix}kick [Marca Alvo Ex @tag]
  ├─ ❏ ${prefix}setname [Altera Nome Do Grupo
  ├─ ❏ ${prefix}setdesc [Altera Desc Do Grupo
  ├─ ❏ ${prefix}setpp [Marque Uma Imagem
  ├─ ❏ ${prefix}listadmin [Lista De Admin
  ├─ ❏ ${prefix}linkgc [Link Do Grupo
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup) [buka abri o grupo/tutup fecha o grupo] 
  ├─ ❏ ${prefix}welcome [1/0] [Modo Bem Vindo] 
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  
◪ *SOM*
  │
  ├─ ❏ ${prefix}hai
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
  ├─ ❏ ${prefix}sfw
  ├─ ❏ ${prefix}nsfw
  ├─ ❏ ${prefix}randomsfw
  ├─ ❏ ${prefix}randomnsfw
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
  
◪ *informação*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  ├─ ❏ ${prefix}covidindo
  ├─ ❏ ${prefix}covidglobal
  ├─ ❏ ${prefix}ceknamaff
  ├─ ❏ ${prefix}namaninja
  ├─ ❏ ${prefix}newsinfo
  └─ ❏ ${prefix}ceknamaml
  
◪ *PROPRIETÁRIO*
  │
  ├─ ❏ ${prefix}setprefix [Muda Prefixo Do BOT] 
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block [Marque O Alvo Que Você Deseja Da Block] 
  ├─ ❏ ${prefix}unblock [Marque O Alvo Que Você Deseja Desbloquear] 
  ├─ ❏ ${prefix}setprefix [Muda Prefixo Do BOT] 
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc [Transmissão Para Pv] 
  ├─ ❏ ${prefix}bcgc [Transmissão Para Grupo 
  ├─ ❏ ${prefix}clone [Marque Alvo Que Você Deseja Clona @TAG
  └─ ❏ ${prefix}clearall [Limpa O Chat Do BOT] 
  
◪ *OUTRO*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
  
◪ *DESENVOLVIDO POR  MINATO*
*CRÉDITOS DA BASE AO ITSMEIKYXSEC404
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 FELIZ 」*
  ❏ Nome : ${pushname}
  ❏ Numero : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +9999
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpa ${pushname} O limite de hoje aumentou*\n*Contato Ao Meu Dono* : wa.me/5511934488829\n\n*Nota : Daremos aleatoriamente de 1-10 *`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTA : Para chegar ao limite.  Você pode subir de nível por meio de grupos ou buylimit.
`}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 Para Ativa ou 0 Para Desativa
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Nome* : ${pushname}\n  ├─ ❏ *Numero* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
