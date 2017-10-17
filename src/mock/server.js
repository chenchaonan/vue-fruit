let http = require('http');
let fs = require('fs');
let url = require('url');

let sliders = require('./sliders');
http.createServer((req, res) => {
  let {pathname}=url.parse(req.url,true);
  if(pathname==='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }
}).listen(3000, () => {
  console.log(3000)
});
