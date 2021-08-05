// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const info = (qiraxyz, uptime, process, wa_version, mcc, mnc, os_version, device_manufacturer, device_model) => { 
return `  ≡ *INFORMASI*
 
┌───⊷ *BOT* ⊶
├╼ Nama : *${qiraxyz.user.name}*
├╼ Version Bot : 1.0
├╼ WAConnection : *${qiraxyz.browserDescription[0]}*
├╼ Browser : *${qiraxyz.browserDescription[1]}*
├╼ Versi Browser : *${qiraxyz.browserDescription[2]}*
├╼ Speed : ${process.uptime()}
├╼ Runtime : *${kyun(uptime)}*
└─────────────
┌───⊷ *DEVICE* ⊶
├╼ Device : ${device_manufacturer}
├╼ Versi OS : ${os_version}
├╼ Versi Device : ${device_model}
├╼ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├╼ MCC : ${mcc}
├╼ MNC : ${mnc}
├╼ Versi Wa : ${qiraxyz.user.phone.wa_version}
└──────────────

▢ Github :
https://github.com/mrfzvx12/lexav3
▢ BASE :
https://github.com/MhankBarBar/termux-wabot
▢ DEV :
https://github.com/mrfzvx12
`
}
exports.info = info