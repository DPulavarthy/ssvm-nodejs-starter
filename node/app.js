// ENABLE THE FOLLOWING CODE IF YOU WISH TO USE THE WEBSITE
// http://localhost:3000/?text=SOME_TEXT

/*
let hostname = '0.0.0.0', port = 3000, alexa = require(`alexa-bot-api`), server = require('http').createServer(async (req, res) => {
  let queryObject = require('url').parse(req.url,true).query;
  if (!queryObject['text']) { res.end(final(`ERROR: Please use the proper format: http://${hostname}:${port}/?text=TEXT_HERE`)); } 
  else { new alexa(`aw2plm`).getReply(queryObject['text']).then(reply => { let result = require('../pkg/ssvm_nodejs_starter_lib.js').say(reply); res.end(final(result)); }); }
  // Yes, I know the ^[API key] is posted, it is a public key from https://www.npmjs.com/package/alexa-bot-api, no need to notify me :)
});

server.listen(port, hostname, () => { console.log(`Server running at [https://${hostname}:${port}/?text=TEXT_HERE]`); });

function final(input) {
  let toappend = [];
  toappend.push(`<!DOCTYPE html><html lang="en"><head><title>AI Reply</title></head><body style="background-color:rgba(0,0,0,0.5);">`);
  toappend.push(`<form name="frm1" method="get"><input type="text" name="text" placeholder="Type Here!" style="min-height:35px;"><input type="submit" value="Get A reply" style="min-height:35px;background-color:lightblue;border-radius:5px;"/></form>`);
  toappend.push(`<br /><b>${input}</b>`);
  toappend.push(`</body></html>`);
  return toappend.join(``);
  // Aren't I so cool? Using JS to code HTML...
}
*/


// ENABLE THE FOLLOWING CODE IF YOU WISH TO USE GET THE REPLY THROUGH CURL (DEFAULT)
// curl http://localhost:3000/?text=SOME_TEXT

let hostname = '0.0.0.0', port = 3000, alexa = require(`alexa-bot-api`), server = require('http').createServer(async (req, res) => {
  let queryObject = require('url').parse(req.url,true).query;
  if (!queryObject['text']) { res.end(`ERROR: Please use the proper format: http://${hostname}:${port}/?text=TEXT_HERE`); } 
  else { new alexa(`aw2plm`).getReply(queryObject['text']).then(reply => { let result = require('../pkg/ssvm_nodejs_starter_lib.js').say(reply); res.end(result); }); }
  // Yes, I know the ^[API key] is posted, it is a public key from https://www.npmjs.com/package/alexa-bot-api, no need to notify me :)
});

server.listen(port, hostname, () => { console.log(`Server running at [https://${hostname}:${port}/?text=TEXT_HERE]`); });