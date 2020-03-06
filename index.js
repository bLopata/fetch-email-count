var polka = require('polka')
var { json } = require('body-parser')

polka()
    .use(json())
    .post('/emails', (req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      let json = JSON.stringify(countEmails(req.body))
      res.end(json)
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });

function countEmails(emailList) {
    var counts = {};
    for(let email of emailList){
      while(email.indexOf(".") < email.indexOf("@")){
        email = email.replace(".", "")
      }
      if(email.includes("+")){
        email = email.replace(/(\+[a-z]{0,})/gi, "")
      }
      counts[email] = 1 + (counts[email] || 0);
    }
		return Object.keys(counts).length
}