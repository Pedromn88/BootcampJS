//IBAN - CASO 1

const pattern = /^(ES)(\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4})$/;
const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890']

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.exec(value));  
});





//MATRICULAS

const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/

const values = ['2021 GMD','2345-GMD','4532BDB', '0320-AAA']

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.exec(value));  
});

