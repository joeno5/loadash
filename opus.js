'use strict';
const fetch = require('node-fetch');
const qrcode = require('qrcode');
const R = require('ramda');

// const searchName = 'alex';
const searchName = 'jin guang';

const personAPI = 'https://researchuat.polyu.edu.hk/ws/api/514/persons/active';

const fields = [ 'fields=name.*'
                ,'info.portalUrl'
                ,'titles.value'
                ,'titles.type'
                ,'staffOrganisationAssociations.organisationalUnit.names.value'
                ,'staffOrganisationAssociations.emails.value'
              ];

const apiKey = 'ff351541-9f44-48b8-a9c3-d05bad46a325';

const itemsLens = R.lensPath(['items']);
const firstNameLens = R.lensPath(['name','firstName']);
const lastNameLens = R.lensPath(['name','firstName']);
const portalUrlLens = R.lensPath(['info','portalUrl']);

const qrcodefn = x => {
  qrcode.toFile(`c:/temp/${R.view(firstNameLens, x)}-${R.view(lastNameLens, x)}.png`, R.view(portalUrlLens, x))
  .then(url => {
      console.log(`generated QR code for ${R.view(portalUrlLens, x)}`);
  })
  .catch(err => {
      console.error(err);
  })
};

const getItems = R.view(itemsLens);
const qrcodeMapFn = R.compose(R.map(qrcodefn), getItems);

fetch(`${personAPI}?q=/${searchName}/&${fields}.join()`, {
  headers: new fetch.Headers({
    'Accept': 'application/json',
    'api-key': apiKey
  })
})
.then(response => response.json())
.then(data => {
    qrcodeMapFn(data);
})
.catch(error => console.error(error))