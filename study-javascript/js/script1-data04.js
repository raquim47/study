  //01. if문
  {
    //조건문
    if (true) {
      document.querySelector(".result1").innerHTML = "실행되었습니다.(true)";
    } else {
      document.querySelector(".result1").innerHTML = "실행되었습니다.(false)";
    }
  }

  //02. if문 생략 (중괄호 생략!!!)
  {
    const num = 100;

    if (num == 100) document.querySelector(".result2").innerHTML = "실행되었습니다.(true)";
    else document.querySelector(".result2").innerHTML = "실행되었습니다.(false)";
  }

  //03. 다중 if문
  {
    const num = 100;

    if (num == 90) {
      document.querySelector(".result3").innerHTML = "실행되었습니다.(num==90)";
    } else if (num == 100) {
      document.querySelector(".result3").innerHTML = "실행되었습니다.(num==100)";
    } else if (num == 110) {
      document.querySelector(".result3").innerHTML = "실행되었습니다.(num==110)";
    } else if (num == 120) {
      document.querySelector(".result3").innerHTML = "실행되었습니다.(num==120)";
    } else {
      document.querySelector(".result3").innerHTML = "실행되었습니다.(num==값이없음)";
    }
  }

  //04. 중첩 if문
  {
    const num = 100;

    if (num == 100) {
      document.querySelector(".result4").innerHTML = "실행되었습니다.(1)<br>";
      if (num == 100) {
        document.querySelector(".result4").innerHTML += "실행되었습니다.(2)<br>";
        if (num == 100) {
          document.querySelector(".result4").innerHTML += "실행되었습니다.(3)";
        }
      }
    } else {
      document.querySelector(".result4").innerHTML = "실행되었습니다.(4)";
    }
  }
  //05. 삼항 연산자(조건부 연산자)
  {
    const num = 100;

    // if(num == 100){
    //     document.querySelector(".result5").innerHTML = "true<br>";
    // } else {
    //     document.querySelector(".result5").innerHTML = "false<br>";
    // }

    (num == 100) ? document.querySelector(".result5").innerHTML += "true": document.querySelector(".result5").innerHTML += "false";
  }

  //06. switch문
  {
    const num = 100;

    switch (num) {
      case 100:
        document.querySelector(".result6").innerHTML = "실행되었습니다(num==100)";
        break;
      case 200:
        document.querySelector(".result6").innerHTML = "실행되었습니다(num==200)";
        break;
      case 300:
        document.querySelector(".result6").innerHTML = "실행되었습니다(num==300)";
        break;
      case 400:
        document.querySelector(".result6").innerHTML = "실행되었습니다(num==400)";
        break;
      default:
        document.querySelector(".result6").innerHTML = "실행되었습니다(num==값이없음)";
    }
  }

  //07. while문
  {
    let num = 1;

    while (num <= 5) {
      document.querySelector(".result7").innerHTML += num + ". 실행되었습니다." + "<br>";
      num++;
    }
  }

  //08. do while문
  {
    let num = 1;

    do {
      document.querySelector(".result8").innerHTML += num + ". 실행되었습니다.<br>";
      num++;
    } while (num <= 5)
  }

  //09. for문
  {
    for (let i = 1; i <= 5; i++) {
      document.querySelector(".result9").innerHTML += i + ". 실행되었습니다.<br>";
    }
  }

  //10. 중첩 for문
  {
    for (let i = 1; i <= 2; i++) {
      document.querySelector(".result10").innerHTML += i + ". 실행(i)되었습니다.<br><br>";
      for (let j = 1; j <= 3; j++) {
        document.querySelector(".result10").innerHTML += j + ". 실행(j)되었습니다.<br>";
      }
      if (i != 2) {
        document.querySelector(".result10").innerHTML += "<br>";
      }
    }
  }

  //11. break문
  {
    //while문을 이용해서 0~20까지 출력
    let num = 1;
    while (num <= 20) {
      document.querySelector(".result11").innerHTML += num + " ";
      if (num == 10) {
        break;
      }
      num++;
    }

    document.querySelector(".result11").innerHTML += "<br>";

    //for문을 이용해서 0~20 출력
    for (let i = 1; i <= 20; i++) {

      document.querySelector(".result11").innerHTML += i + " ";
      if (i == 10) {
        break;
      }
    }
  }

  //12. continue문
  {
    //while문을 이용해서 1~10까지 출력
    let num = 0;
    while (num < 10) {
      num++;
      if (num == 5) {
        continue;
      }
      document.querySelector(".result12").innerHTML += num + " ";
    }

    document.querySelector(".result12").innerHTML += "<br>";


    //for문을 이용해서 1~10까지 출력
    for (let i = 1; i <= 10; i++) {
      if (i == 5) {
        continue;
      }
      document.querySelector(".result12").innerHTML += i + " ";
    }
  }