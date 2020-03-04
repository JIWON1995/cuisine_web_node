const httpStatus = require("http-status-codes"),
contentTypes = require('./content-types'),
utils = require("./utils");

const routes = { //라우트 함수를 위한 routes객체 생성
  "GET" : {},
  "POST" : {}
};


exports.handle = (req, res) => { //요청을 처리하기 위한 handle함수를 생성
  try{
    routes[req.method][req.url](req, res);
  }catch(e){
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html",res);
  }
};

exports.get = (url, action) => { //라우트 함수를 매핑하기 위한 get/post함수를 생성
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
