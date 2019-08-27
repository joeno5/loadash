'use strict';
const qrcode = require('qrcode');

const qrcodefn = x => {
    qrcode.toFile(`c:/temp/qr.png`, x)
    .then(url => {
        console.log(`generated QR code for ${x}`);
    })
    .catch(err => {
        console.error(err);
    })
  };

let url = 'https://hk.linkedin.com/in/miranda-lou-615555154'

qrcodefn(url);