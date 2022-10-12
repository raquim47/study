//데이터 저장 --> 데이터 불러오기
//01. 변수 : 데이터 불러오기
{
  let x = 100,
    y = 200,
    z = "hong";

  document.querySelector(".result1").innerHTML = x + "<br>" + y + "<br>" + z;
}

//02. 상수 : 데이터 불러오기
{
  const x = 100,
    y = 200,
    z = "hong";

  document.querySelector(".result2").innerHTML = x + "<br>" + y + "<br>" + z;
}

//03. 배열 : 데이터 불러오기
{
  const arr = [100, 200, "hong"];

  document.querySelector(".result3").innerHTML = arr[0] + "<br>" + arr[1] + "<br>" + arr[2];
}

//04. 배열 : 데이터 불러오기 : 2차 배열
{
  const arr = [100, 200, ["javascript", "jquery"]];

  document.querySelector(".result4").innerHTML = arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>" + arr[2][
    0
  ] + "<br>" + arr[2][1];
}

//05. 배열 : 데이터 불러오기 : 갯수 구하기
{
  const arr = [100, 200, "hong", "kim"];

  document.querySelector(".result5").innerHTML = arr.length;
}

//06. 배열 : 데이터 불러오기 : for()문
{
  const arr = [100, 200, 300, 400, 'hong'];
  // document.write(arr[0])
  // document.write(arr[1])
  // document.write(arr[2])
  // document.write(arr[3])
  // document.write(arr[4])
  //for(초기값, 조건식, 증감식)
  // for( let i=0; i<arr.length; i++ ){
  //     document.write(arr[i], "<br>");
  // }
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(".result6").innerHTML += arr[i] + "<br>";
  }
}

//07. 배열 : 데이터 불러오기 : forEach()
{
  const num = [100, 200, 300, 400, 'hong'];

  document.querySelector(".result7").innerHTML = num[0] + " ";
  document.querySelector(".result7").innerHTML += num[1] + " ";
  document.querySelector(".result7").innerHTML += num[2] + " ";
  document.querySelector(".result7").innerHTML += num[3] + " ";
  document.querySelector(".result7").innerHTML += num[4] + " ";

  document.querySelector(".result7").innerHTML += "<br>";

  for (let i = 0; i < num.length; i++) {
    document.querySelector(".result7").innerHTML += num[i] + " ";
  }

  document.querySelector(".result7").innerHTML += "<br>";

  //forEach() 메서드. 콜백함수를 쓴다. 
  // num.forEach(function(el){
  //     document.write(el, " ");
  // });
  num.forEach(function (el) {
    document.querySelector(".result7").innerHTML += el + " ";
  });

  document.querySelector(".result7").innerHTML += "<br>";
  //forEach(element, index, array)
  num.forEach(function (element, index, array) {
    if (index == num.length - 1) {
      document.querySelector(".result7").innerHTML += element + " " + index + " " + array;
    } else {
      document.querySelector(".result7").innerHTML += element + " " + index + " " + array +
        "<br>";
    }

  });
}

//08. 배열 : 데이터 불러오기 : for of
{
  const num = [100, 200, 300, 400, 'hong'];

  // document.write("<br>***08. 배열 : 데이터 불러오기 : for of***<br>")
  // for( let i of num ){
  //     document.write(i);
  // }
  for (let i of num) {
    document.querySelector(".result8").innerHTML += i + " ";
  }
}

//09. 배열 : 데이터 불러오기 : for in
{
  const num = [100, 200, 300, 400, 'hong'];

  const book = {color: 'red', price: 1200 };

  //for in 문은 객체를 쓰기 위해 나오는 것
  // document.write("<br>***09. 배열 : 데이터 불러오기 : for in***<br>")
  // for( let i in num ){
  //     document.write(i);
  // }

  // for( let i in num ){
  //     document.write(num[i]);
  // }

  for (let i in num) {
    document.querySelector(".result9").innerHTML += i + " ";
  }

  document.querySelector(".result9").innerHTML += "<br>";

  for (let i in num) {
    document.querySelector(".result9").innerHTML += num[i] + " ";
  }

  document.querySelector(".result9").innerHTML += "<br>";

  for(let key in book ) {
    document.querySelector(".result9").innerHTML += book[key] + " ";;
  }

  document.querySelector(".result9").innerHTML += "<br>";

  for(let key in book ) {
    document.querySelector(".result9").innerHTML += key + " ";;
  }
}

//10. 배열 : 데이터 불러오기 : map()
{
  const num = [100, 200, 300, 400, 500];

  // document.write("<br>***10. 배열 : 데이터 불러오기 : map()***<br>")

  //map(element, index, array) --> 배열에서만 쓸 수 있음.

  // num.map(function(el){
  //     document.write(el);
  // })

  num.map(function (el) {
    document.querySelector(".result10").innerHTML += el + " ";
  });
  
  
  // num.map(function(element, index, array){
  //     document.write(element);
  //     document.write(index);
  //     document.write(array);
  //     document.write("<br>")
  // });

  document.querySelector(".result10").innerHTML += "<br>";

  num.map(function (element, index, array) {
    // if(index == num.length-1){ document.querySelector(".result10").innerHTML += element + " " + index + " " + array; }
    // else{ document.querySelector(".result10").innerHTML += element + "<br>" + index + "<br>" + array + "<br>"; }
    document.querySelector(".result10").innerHTML += element + " " + index + " " + array + "<br>";
  });
}

//11. 배열 : 데이터 불러오기 : 펼침 연산자(Spread Operator)
{
  const num = [100, 200, 300, 400, 500]

  // document.write(num); // 100, 200, 300, 409, 500
  // document.write("<br>");
  // document.write(num[0], num[1], num[2], num[3], num[4]); // 100 200 300 400 500
  // document.write("<br>");
  // document.write(...num); //100200300400500, .을 변수명 앞에 3번!!!

  document.querySelector(".result11").innerHTML = num + "<br>";
  document.querySelector(".result11").innerHTML += num[0] + "," + num[1] + "," + num[2] + "," + num[3] + "," +
    num[4] + "<br>";
  document.querySelector(".result11").innerHTML += [...num];
}

//12. 배열 : 데이터 불러오기 : 배열구조분해할당(Destructuring Assignment)
{
  let a, b, c;

  [a, b, c] = [100, 200, "hong"];

  // document.write(a);
  // document.write(b);
  // document.write(c);
  document.querySelector(".result12").innerHTML = a + "<br>";
  document.querySelector(".result12").innerHTML += b + "<br>";
  document.querySelector(".result12").innerHTML += c + "<br>";
}

//13. 객체 : 데이터 불러오기 : 기본
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  };

  // document.write(obj.a);
  // document.write(" ");
  // document.write(obj.b);
  // document.write(" ");
  // document.write(obj.c);
  // document.write(obj['a'])
  // document.write(obj['b'])
  // document.write(obj['c'])

  document.querySelector(".result13").innerHTML = obj.a + "<br> ";
  document.querySelector(".result13").innerHTML += obj.b + "<br> ";
  document.querySelector(".result13").innerHTML += obj.c + "<br> ";
  document.querySelector(".result13").innerHTML += obj['a'] + "<br> ";
  document.querySelector(".result13").innerHTML += obj['b'] + "<br> ";
  document.querySelector(".result13").innerHTML += obj['c'] + "<br> ";
}

//14. 객체 : 데이터 불러오기 : Object
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  };

  // document.write(Object.keys(obj), "<br>");
  // document.write(Object.values(obj), "<br>");
  // document.write(Object.entries(obj), "<br>");

  document.querySelector(".result14").innerHTML = Object.keys(obj) + "<br>";
  document.querySelector(".result14").innerHTML += Object.values(obj) + "<br>";
  document.querySelector(".result14").innerHTML += Object.entries(obj);
}

//15. 객체 : 데이터 불러오기 : 변수
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  };

  const name1 = obj.a;
  const name2 = obj.b;
  const name3 = obj.c;

  // document.write(name1)
  // document.write(name2)
  // document.write(name3)

  document.querySelector(".result15").innerHTML = name1 + "<br>";
  document.querySelector(".result15").innerHTML += name2 + "<br>";
  document.querySelector(".result15").innerHTML += name3;
}

//16. 객체 : 데이터 불러오기 : for in
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  for (let key in obj) {
    document.querySelector(".result16").innerHTML += obj[key] + "<br>";
  }
}

//17. 객체 : 데이터 불러오기 : map()
{
  const obj = [{
    a: 100,
    b: 200,
    c: "hong"
  }]
  
  obj.map(function (el) {
    document.querySelector(".result17").innerHTML = [el] + "<br>";
  });

  obj.map(function (el) {
    document.querySelector(".result17").innerHTML += el.a + "<br>";
    document.querySelector(".result17").innerHTML += el.b + "<br>";
    document.querySelector(".result17").innerHTML += el.c;
  });
}

//18. 객체 : 데이터 불러오기 : hasOwnProperty() : 객체 안에 데이터가 있나 없나 확인용.
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  document.querySelector(".result18").innerHTML = obj.hasOwnProperty('a') + "<br>";
  document.querySelector(".result18").innerHTML += obj.hasOwnProperty('b') + "<br>";
  document.querySelector(".result18").innerHTML += obj.hasOwnProperty('c') + "<br>";
  document.querySelector(".result18").innerHTML += obj.hasOwnProperty('d') + "<br>";
  document.querySelector(".result18").innerHTML += 'a' in obj
  document.querySelector(".result18").innerHTML += "<br>";
  document.querySelector(".result18").innerHTML += 'b' in obj
  document.querySelector(".result18").innerHTML += "<br>";
  document.querySelector(".result18").innerHTML += 'c' in obj
  document.querySelector(".result18").innerHTML += "<br>";
  document.querySelector(".result18").innerHTML += 'd' in obj;
}

//19. 객체 : 데이터 불러오기 : 펼침연산자 - 복사
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  const spread = {
    ...obj
  }

  document.querySelector(".result19").innerHTML = spread.a + "<br>";
  document.querySelector(".result19").innerHTML += spread.b + "<br>";
  document.querySelector(".result19").innerHTML += spread.c + "<br>";
}

//20. 객체 : 데이터 불러오기 : 펼침연산자 - 추가
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  const spread = {
    ...obj,
    d: "kim"
  }

  document.querySelector(".result20").innerHTML = spread.a + "<br>";
  document.querySelector(".result20").innerHTML += spread.b + "<br>";
  document.querySelector(".result20").innerHTML += spread.c + "<br>";
  document.querySelector(".result20").innerHTML += spread.d;
}

//21. 객체 : 데이터 불러오기 : 펼침연산자 - 결합
{
  const objA = {
    a: 100,
    b: 200
  }

  const objB = {
    c: "hong",
    d: "kim"
  }

  const spread = {
    ...objA,
    ...objB
  };

  document.querySelector(".result21").innerHTML = spread.a + "<br>";
  document.querySelector(".result21").innerHTML += spread.b + "<br>";
  document.querySelector(".result21").innerHTML += spread.c + "<br>";
  document.querySelector(".result21").innerHTML += spread.d;
}

//22. 객체 : 데이터 불러오기 : 비구조화 할당
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  const {
    a,
    b,
    c
  } = obj;

  document.querySelector(".result22").innerHTML = a + "<br>";
  document.querySelector(".result22").innerHTML += b + "<br>";
  document.querySelector(".result22").innerHTML += c;
}

//23. 객체 : 데이터 불러오기 : 비구조화 할당 : 별도 이름 저장
{
  const obj = {
    a: 100,
    b: 200,
    c: "hong"
  }

  const {
    a: name1,
    b: name2,
    c: name3
  } = obj;

  document.querySelector(".result23").innerHTML = name1 + "<br>";
  document.querySelector(".result23").innerHTML += name2 + "<br>";
  document.querySelector(".result23").innerHTML += name3;
}