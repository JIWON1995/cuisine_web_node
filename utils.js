//이 모듈에서 getFile 함수를 포함하는 객체를 익스포트 했다. 찾는 파일이 없는 경우 에러 페이지를 출력한다.
//
//

const fs = require("fs"),
httpStatus = require("http-status-codes"),
contentTypes = require('./content-types'); //getFile에서 사용할 모듈들의 임포트

module.exports = { //파일을 읽고 응답을 돌려주기 위한 함수의 익스포트
  getFile:(file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if(error){
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  }
};
