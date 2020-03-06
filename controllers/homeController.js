exports.sendReqParam = (req, res) => { //exports.sendReqParam을 콜백 함수로 지정함. // 지정 라우트 요청 처리를 위한 함수 생성
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

//요청이 서버로 전달되고 이벤트 루프와 요청 처리기에 의해 처음으로 요청이 처리된다.
//Express.js와 라우트는 요청을 처리하고 요청을 더 처리할지 또는 응답으로 보낼찌 판단한다.
//특정 요청은 모델 레이어와 데이터베으스 레이어와의 상호작용이 필요할 수도 있다.
//사용자에게 데이터가 전달되며 템플릿 엔진의 도음으로 생성된 뷰 페이지에 의해 브라우저로 데이터 결과를 볼 수 있다.

//main.js  app.get("/items/:vegetable", homeController.sendReqParam);
