let handler = require('./index.js');

handler.handler ( 
  {}, // event
  {}, // content 
  (error, result) => { 
     if (error) console.error(JSON.stringify(error, null, 2));
     else console.log(JSON.stringify(result, null, 2));
  }
);