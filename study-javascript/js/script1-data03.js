//데이터 저장 : 변수, 상수, 배열, 객체(저장소)
//변수 : 데이터 저장, 변경, 추가
//상수: 데이터 저장, 변경X
//배열: 데이터 저장, 여러개
//객체: 데이터 저장, 여러개, 키와 값
//데이터 실행 : 함수(실행문)
//웹표준 : 표준안
//웹접근성 : 누구나
//웹호환성 : 브라우저

//01. 선언적 함수, 함수가 실행 될 때에는 선언이 되어야 한다.
{
  function func() {
    document.querySelector(".result1").innerHTML = "함수가 실행되었습니다.1 ";
  }
  func();
}

//02. 익명 함수, 함수가 변수 안에 들어가서 이름이 안보임
{
  const func = function () {
    document.querySelector(".result2").innerHTML = "함수가 실행되었습니다.2 ";
  }
  func();
}

//03. 매개변수 함수, 함수를 선언할 때 전달이 되는 변수
{
  function func(str) {
    document.querySelector(".result3").innerHTML = str;
  }
  func("함수가 실행되었습니다.3");
}

//04. 리턴값 함수, 함수의 결괏값을 리턴해주는 함수
{
  function func() {
    const str = "함수가 실행되었습니다.4 ";
    return str;
  }
  document.querySelector(".result4").innerHTML = func();
}

//05. 화살표 함수 : 선언적 함수
{
  func = () => {
    document.querySelector(".result5").innerHTML = "함수가 실행되었습니다.5";
  }

  func();
}

//06. 화살표 함수 : 익명 함수
{
  // const func = function(){
  //     document.write("함수가 실행되었습니다.6");
  // };
  // func();

  const func = () => {
    document.querySelector(".result6").innerHTML = "함수가 실행되었습니다.6";
  };
  func();
}

//07. 화살표 함수 : 매개변수 함수
{
  func = (str) => {
    document.querySelector(".result7").innerHTML = str;
  }
  func("함수가 실행되었습니다.7");
}

//08. 화살표 함수 : 리턴값 함수
{
  // function func(){
  //     const str = "함수가 실행되었습니다.7"
  //     return str;
  // }
  // document.write(func());

  func = () => {
    const str = "함수가 실행되었습니다.8"
    return str;
  }
  document.querySelector(".result8").innerHTML = func();
}

//09. 화살표 함수 : 익명함수 + 매개변수 + 리턴값
{
  const func = (str) => {
    return str;
  };
  document.querySelector(".result9").innerHTML = func("함수가실행되었습니다.9");
}

{
  const number = [];

  func = (str) => {
    return str;
  }

  for (let i = 0; i < 10; i++) {
    // console.log(func("화살표함수+for반복문"+i));
    number[i] = i + 1;
  }


  number.forEach(function (el) {
    // console.log(el);
  })

  //10. 화살표 함수 : 익명함수 + 매개변수 + 리턴값 + 괄호 생략
  {
    const func = str => { // a매개변수가 한개면 괄호 생략가능
      return str;
    }
    document.querySelector(".result10").innerHTML = func("함수가 실행되었습니다.10");
  }

  //11. 화살표 함수 : 익명함수 + 매개변수 + 리턴값 + 괄호 생략 + 리턴 생략
  {
    const func = str => str;
    document.querySelector(".result11").innerHTML = func("함수가 실행되었습니다.11");
  }

  //12. 화살표 함수 : 선언적 함수 + 매개변수 + 리턴값 + 괄호 생략 + 리턴 생략
  {
    func = str => str;
    document.querySelector(".result12").innerHTML = func("함수가 실행되었습니다.12");
  }
}

//13. 내부 함수 / 외부 함수 / 클로저
{
  function func() {
    function funA() {
      document.querySelector(".result13").innerHTML = "내부 함수 funA 실행<br>"
    }
    funA();

    function funB() {
      document.querySelector(".result13").innerHTML += "내부 함수 funB 실행"
    }
    funB();
  }
  func();
}

//14. 즉시 실행 함수
{
  // function func(){
  //     document.write("함수가 실행되었습니다.");
  // }
  // func();

  (function () {
    document.querySelector(".result14").innerHTML = "즉시 실행 함수 실행<br>"
    // console.log("1");
  }());
  
  (() => {
    document.querySelector(".result14").innerHTML += "즉시 실행 화살표 함수 실행"
    // console.log("2");
  })();
}

//15. 파라미터 함수 : 매개변수 전달
{
  function func(str = "함수가 실행되었습니다.") {
    document.querySelector(".result15").innerHTML = str;
  }
  func();
}

//16. 아규먼트 함수, 매개변수가 배열안에 있는 것처럼 사용함. 인자를 전달
{
  function func(a,b,c){
    for (var i = 0; i < arguments.length; i++){
      document.querySelector(".result16").innerHTML += arguments[i] + " ";
    }
  }
  
  func(2,3,4);

}

//17. 재귀함수 : 자기 자신을 다시 호출하는 함수
{
  // function func(){
  //     document.write("오랜만이다!! 함수가 실행되었습니다.");
  // }
  // func();

  function func(num) {
    if (num <= 1) {
      document.querySelector(".result17").innerHTML += "if함수가 실행되었습니다." + num;
    } else {
      document.querySelector(".result17").innerHTML += "else함수가 실행되었습니다." + num;
      document.querySelector(".result17").innerHTML += "<br>";
      func(num - 1);
    }
  }
  func(5);
}


//18. 콜백함수 : 다른 함수에 인수로 넘겨지는 함수
{
  function func() {
    document.querySelector(".result18").innerHTML += "함수가 실행 되었습니다.2";
  }

  function callback(str) {
    document.querySelector(".result18").innerHTML = "함수가 실행 되었습니다.1 <br>";
    str();
  }
  callback(func);
}

//19. 콜백 함수 : 반복문
{
  function func(num) {
    document.querySelector(".result19").innerHTML += "함수가 실행되었습니다." + num + "<br>";
  }

  function callback(num) { //인자,파라미터
    for (let i = 1; i <= 5; i++) {
      num(i);
    }
  }
  callback(func); //인수
}

//20. 콜백함수 : 동기/비동기
{
  function funcA() {
    document.querySelector(".result20").innerHTML = ("funcA가 실행되었습니다.<br>");
  }

  function funcB() {
    document.querySelector(".result20").innerHTML += ("funcB가 실행되었습니다.<br>");
  }
  funcA();
  funcB();

  // function funcC(){
  //     setTimeout(()=>{
  //         console.log("C");
  //     },1000)
  // }
  // function funcD(){
  //     console.log("D");
  // }
  // funcC();
  // funcD();

  function funcE(callback) {
    setTimeout(() => {
      document.querySelector(".result20").innerHTML += ("E<br>");
      callback();
    }, 1000);
  }

  function funcF() {
    document.querySelector(".result20").innerHTML += ("F<br>");
  }
  funcE(function () {
    funcF();
  });
}

//21. 함수 유형 : 함수와 매개변수를 이용한 형태
{
  function func(num, name, job) {
    document.querySelector(".result21").innerHTML += num + ". 내 이름은 " + name + "이며, 직업은 " + job + "입니다.";
  }
  func("1", "웹쓰", "웹 퍼블리셔");
  document.querySelector(".result21").innerHTML += "<br>";
  func("2", "웹스토리보이", "프론트앤드개발자");
}

//22. 함수 유형 : 함수와 변수를 이용한 형태
{
  function func(num, name, job) {
    document.querySelector(".result22").innerHTML += num + ". 내 이름은 " + name + "이며, 직업은 " + job + "입니다.";
  }

  const youNum1 = "1";
  const youName1 = "웹쓰";
  const youJob1 = "웹 퍼블리셔";
  const youNum2 = "2";
  const youName2 = "웹스토리보이";
  const youJob2 = "프론트앤드개발자";

  func(youNum1, youName1, youJob1);
  document.querySelector(".result22").innerHTML += "<br>";
  func(youNum2, youName2, youJob2);
}

//23. 함수 유형 : 함수와 배열, 객체를 이용한 형태
{
  function func(num, name, job) {
    document.querySelector(".result23").innerHTML += num + ". 내 이름은 " + name + "이며, 직업은 " + job + "입니다.";
  }

  const info = [{
    num: "1",
    name: "웹쓰",
    job: "웹퍼블리셔"
  }, {
    num: "2",
    name: "웹스토리보이",
    job: "프론트앤드개발자"
  }]

  func(info[0].num, info[0].name, info[0].job);
  document.querySelector(".result23").innerHTML += "<br>";
  func(info[1].num, info[1].name, info[1].job);
}

//24. 함수 유형 : 객체 안에 변수와 함수를 이용한 형태
{
  const info = {
    num1: 1,
    name1: "웹쓰",
    job1: "웹퍼블리셔",
    num2: 2,
    name2: "웹스토리보이",
    job2: "프론트앤드개발자",

    result1: function () {
      document.querySelector(".result24").innerHTML = this.num1 + ". 내 이름은 " + this.name1 + "이며, 직업은 " + this
        .job1 + "입니다.<br>";
    },
    result2: function () {
      document.querySelector(".result24").innerHTML += this.num2 + ". 내 이름은 " + this.name2 + "이며, 직업은 " + this
        .job2 + "입니다.";
    }
  }

  info.result1();
  info.result2();
}

//25. 함수 유형 : 객체 생성자 함수
{
  function func(num, name, job) {
    this.num = num;
    this.name = name;
    this.job = job;

    this.result = function () {
      document.querySelector(".result25").innerHTML += this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this
        .job + "입니다.";
    }
  }

  //인스턴스 생성
  const info1 = new func("1", "웹쓰", "웹퍼블리셔");
  const info2 = new func("2", "웹스토리보이", "프론트앤드개발자");

  info1.result();
  document.querySelector(".result25").innerHTML += "<br>";
  info2.result();
}

//26. 함수 유형 : 프로토타입 함수
{
  function func(num, name, job) {
    this.num = num;
    this.name = name;
    this.job = job;
  }

  func.prototype.result = function () {
    document.querySelector(".result26").innerHTML += "프로토타입함수" + this.num + ". 내 이름은 " + this.name +
      "이며, 직업은 " + this.job + "입니다.";
  }

  //인스턴스 생성
  const info1 = new func("1", "웹쓰", "웹퍼블리셔");
  const info2 = new func("2", "웹스토리보이", "프론트앤드개발자");

  info1.result();
  document.querySelector(".result26").innerHTML += "<br>";
  info2.result();
}

//27. 함수 유형 : 객체 리터럴 함수
{
  function func(num, name, job) {
    this.num = num;
    this.name = name;
    this.job = job;
  }

  func.prototype = {
    result1: function () {
      document.querySelector(".result27").innerHTML = "리터럴함수" + this.num + ". 내 이름은 " + this.name +
        "이며, 직업은 " + this.job + "입니다.";
    },
    result2: function () {
      document.querySelector(".result27").innerHTML += "리터럴함수" + this.num + ". 내 이름은 " + this.name +
        "이며, 직업은 " + this.job + "입니다.";
    }
  }

  //인스턴스 생성
  const info1 = new func("1", "웹쓰", "웹퍼블리셔");
  const info2 = new func("2", "웹스토리보이", "프론트앤드개발자");

  info1.result1();
  document.querySelector(".result27").innerHTML += "<br>";
  info2.result2();
}

//28. 클래스 : 함수의 집합체
{
  class study {
    //무조건실행되는함수, constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
    constructor(num, name, job) {
      this.num = num;
      this.name = name;
      this.job = job;
    }
    result() {
      document.querySelector(".result28").innerHTML += this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this
        .job + "입니다.<br>";
      // document.write(this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this.job + "입니다.");
    }
  }

  const info1 = new study("1", "웹쓰", "웹 퍼블리셔");
  const info2 = new study("2", "웹스토리보이", "프론트앤드개발자");

  info1.result();
  info2.result();
}

//29. 클래스 상속
{
  class study {
    //무조건실행되는함수
    constructor(num, name, job) {
      this.num = num;
      this.name = name;
      this.job = job;
    }
    result() {
      document.querySelector(".result29").innerHTML += this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this
        .job + "입니다.<br>";
      // document.write(this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this.job + "입니다.");
    }
  }

  class study2 extends study {
    constructor(num, name, job, age) {
      super(num, name, job);
      this.age = age;
    }
    result2() {
      document.querySelector(".result29").innerHTML += this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this
        .job + "이며 나이는 " + this.age + "살 입니다.";
      // document.write(this.num + ". 내 이름은 " + this.name + "이며, 직업은 " + this.job + "이며 나이는 " + this.age + "살 입니다.");
    }
  }

  const info1 = new study("1", "웹쓰", "웹 퍼블리셔");
  const info2 = new study2("2", "웹스토리보이", "프론트앤드개발자", 100);

  info1.result();
  info2.result();
  info2.result2();
}