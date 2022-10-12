//01. 변수 : 데이터 저장소
{
  var x = 1; 
  var y = 369; 
  var z = "seongjin";

  document.querySelector(".result1").innerHTML =
    x + "<br>" + y + "<br>" + z;
}

//02. 변수 : 데이터 저장 + 데이터 변경
{
  let x = 100;
  let y = 200;
  let z = "seongjin";

  x = 300;
  y = 400;
  z = "jin";

  document.querySelector(".result2").innerHTML =
    x + "<br>" + y + "<br>" + z;
}

//03. 변수 : 데이터 저장 + 데이터 변경 + 데이터 추가
{
  let x = 100;
  let y = 200;
  let z = "a";

  x += 300; // x = x + 300;
  y -= 400; // y = y - 400;
  z += "b";

  document.querySelector(".result3").innerHTML =
    x + "<br>" + y + "<br>" + z;

  // document.write("<br>*** 03. 변수 ***<br>");
  // document.write(x, "<br>");
  // document.write(y, "<br>");
  // document.write(z, "<br>");
}

// 04. 변수 : 변수의 종류 : 지역변수 + 전역변수
{
  let x = 100; //전역변수
  let y = 200; //전역변수

  function func() {
    let x = 100; //지역변수
    let z = "javascript"; //지역변수
    x = 200; //지역변수 100->200
    y = 300; //전역변수 200->300

    document.querySelector(".result4").innerHTML = "함수 안<br>" + x + "<br>" + y + "<br>" + z;

    // document.write("함수 안<br>");
    // document.write(x, "<br>");
    // document.write(y, "<br>");
    // document.write(z, "<br>");
  }
  //func();

  // document.querySelector(".result4").innerHTML = "함수 밖<br>" + x + "<br>" + y + "<br>" + z;

  //     document.write("함수 밖<br>");
  //     document.write(x, "<br>");
  //     document.write(y, "<br>");
  //     document.write(z, "<br>");
  //
}

// 05. 상수 : 데이터 저장 + 데이터 변경(X)
{
  const x = 100;
  const y = 200;
  const z = "javascript";

  //x = 300;
  //y = 400;
  //z = "jquery";

  document.querySelector(".result5").innerHTML =
    x + "<br>" + y + "<br>" + z;

  //     document.write("<br>*** 05. 상수 ***<br>");
  //     document.write(x, "<br>");
  //     document.write(y, "<br>");
  //     document.write(z, "<br>");
  //
}

// 06. 배열 : 여러개의 데이터를 저장 : 표현 방법1
{
  const arr = new Array();
  arr[0] = 100;
  arr[1] = 200;
  arr[2] = "javascript";

  document.querySelector(".result6").innerHTML =
    arr[0] + "<br>" + arr[1] + "<br>" + arr[2];

  // document.write("<br>*** 06. 배열 ***<br>");
  // document.write(arr[0], "<br>");
  // document.write(arr[1], "<br>");
  // document.write(arr[2], "<br>");
}

// 07. 배열 : 여러개의 데이터를 저장 : 표현 방법2
{
  const arr = new Array(100, 200, "javascript");

  document.querySelector(".result7").innerHTML =
    arr[0] + "<br>" + arr[1] + "<br>" + arr[2];

  // document.write("<br>*** 07. 배열 ***<br>");
  // document.write(arr[0], "<br>");
  // document.write(arr[1], "<br>");
  // document.write(arr[2], "<br>");
}

// 08. 배열 : 여러개의 데이터를 저장 : 표현 방법3
{
  const arr = [];
  arr[0] = 100;
  arr[1] = 200;
  arr[2] = "javascript";

  document.querySelector(".result8").innerHTML =
    arr[0] + "<br>" + arr[1] + "<br>" + arr[2];

  // document.write("<br>*** 08. 배열 ***<br>");
  // document.write(arr[0], "<br>");
  // document.write(arr[1], "<br>");
  // document.write(arr[2], "<br>");
}

// 09. 배열 : 여러개의 데이터를 저장 : 표현 방법4
{
  const arr = [100, 200, "javascript"];

  document.querySelector(".result9").innerHTML =
    arr[0] + "<br>" + arr[1] + "<br>" + arr[2];

  //     document.write("<br>*** 09. 배열 ***<br>");
  //     document.write(arr[0], "<br>");
  //     document.write(arr[1], "<br>");
  //     document.write(arr[2], "<br>");
  //
}

// 10. 객체 : 데이터를 저장(키와 값) : 표현 방법1 : 배열의 방법도 동일하게 적용
{
  const obj = new Object();

  obj[0] = 100;
  obj[1] = 200;
  obj[2] = "javascript";

  document.querySelector(".result10").innerHTML =
    obj[0] + "<br>" + obj[1] + "<br>" + obj[2];

  // document.write("<br>*** 10. 객체  ***<br>");
  // document.write(obj[0], "<br>");
  // document.write(obj[1], "<br>");
  // document.write(obj[2], "<br>");
}

// 11. 객체 : 데이터를 저장(키와 값) : 표현 방법2
{
  const obj = new Object();

  obj.a = 10;
  obj.b = 20;
  obj.c = "kim";

  document.querySelector(".result11").innerHTML =
  obj.a + "<br>" + obj.b + "<br>" + obj.c;

  // document.write("<br>*** 11. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b, "<br>");
  // document.write(obj.c, "<br>");
}

// 12. 객체 : 데이터를 저장(키와 값) : 표현 방법3
{
  const obj = {};

  obj.a = 10;
  obj.b = 20;
  obj.c = "kim";

  document.querySelector(".result12").innerHTML =
  obj.a + "<br>" + obj.b + "<br>" + obj.c;

  // document.write("<br>*** 12. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b, "<br>");
  // document.write(obj.c, "<br>");
}

// 13. 객체 : 데이터를 저장(키와 값) : 표현 방법4
{
  const obj = {
    a: 10,
    b: 20,
    c: "kim"
  };

  document.querySelector(".result13").innerHTML =
  obj.a + "<br>" + obj.b + "<br>" + obj.c;

  // document.write("<br>*** 13. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b, "<br>");
  // document.write(obj.c, "<br>");
}

// 14. 객체 : 데이터를 저장(키와 값) : 표현 방법5 : 배열 속에 객체
{
  const obj = [{
    a: 100,
    b: 20
  }, {
    c: "hong"
  }];

  document.querySelector(".result14").innerHTML =
  obj[0].a + "<br>" + obj[0].b + "<br>" + obj[1].c;

  // document.write("<br>*** 14. 객체  ***<br>");
  // document.write(obj[0].a, "<br>");
  // document.write(obj[0].b, "<br>");
  // document.write(obj[1].c, "<br>");
}

// 15. 객체 : 데이터를 저장(키와 값) : 표현 방법6 : 객체 속에 배열
{
  const obj = {
    a: 1,
    b: [2, 3],
    c: {
      x: 4,
      y: 5
    },
    d: "hong",
  };

  document.querySelector(".result15").innerHTML =
  obj.a + "<br>" + obj.b[0] + "<br>" + obj.b[1] + "<br>" + obj.c.x + "<br>" + obj.c.y + "<br>" + obj.d;

  // document.write("<br>*** 15. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b[0], "<br>");
  // document.write(obj.b[1], "<br>");
  // document.write(obj.c.x, "<br>");
  // document.write(obj.c.y, "<br>");
  // document.write(obj.d, "<br>");
}

// 16. 객체 : 데이터를 저장(키와 값) : 표현 방법7 : 객체 속에 변수
{
  const a = 10;
  const b = 2;
  const c = "hong";

  const obj = {
    a,
    b,
    c
  };

  document.querySelector(".result16").innerHTML =
  obj.a + "<br>" + obj.b + "<br>" + obj.c;

  // document.write("<br>*** 16. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b, "<br>");
  // document.write(obj.c, "<br>");
  // document.write(a);
}

// 17. 객체 : 데이터를 저장(키와 값) : 표현 방법8 : 객체 속에 함수
{
  const obj = {
    a: 100,
    b: [200, 300],
    c: {
      x: 400,
      y: 500
    },
    d: "hong",
    e: function () {
      return "안녕하세요";
    },
    f: function () {
      return `안녕하세요 ${obj.d} 입니다`;
    },
    g: function () {
      return "안녕하세요 " + this.d + " 입니다";
    },
  };

  document.querySelector(".result17").innerHTML = obj.a + "<br>" + obj.b + "<br>" + obj.b[0] + "<br>" + obj.b[1] + "<br>" + obj.c.x + "<br>" + obj.c.y + "<br>" + obj.e() + "<br>" + obj.f() + "<br>" + obj.g();
  // document.querySelector(".result17").innerHTML = obj.a + "<br>" + obj.b + "<br>" + obj.b[0] + "<br>" + obj.b[1] + "<br>" + obj.c.x + "<br>" + obj.c.y +  "<br>" + obj.e(); + "<br>" + obj.f();

  // document.write("<br>*** 17. 객체  ***<br>");
  // document.write(obj.a, "<br>");
  // document.write(obj.b, "<br>");
  // document.write(obj.b[0], "<br>");
  // document.write(obj.b[1], "<br>");
  // document.write(obj.c.x, "<br>");
  // document.write(obj.c.y, "<br>");
  // obj.e();
  // obj.d();
  // obj.g();
}