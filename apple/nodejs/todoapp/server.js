const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Db } = require("mongodb");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
require('dotenv').config();

const passport= require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");

// 미들웨어 - static 파일을 보관하기 위해 public폴더를 쓸거다
app.use('/public', express.static('public'));

let db;
MongoClient.connect(
  process.env.DB_URL,
  (err, client) => {
    if (err) return console.log(err);

    db = client.db("todoapp");

    app.listen(process.env.PORT, function () {
      console.log("listening on 8080");
    });
  }
);

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/write", function (req, res) {
  res.render("write.ejs");
});

app.get("/edit/:id", function (req, res) {
  db.collection('post').findOne({_id: parseInt(req.params.id)}, (err,result)=>{
    if(err || !result){
      return res.status(404).send('페이지를 찾을 수 없습니다.'); 
    }
    res.render("edit.ejs", {post : result});
  })
});
// add 경로로 POST요청을 하면
app.post("/add", (req, res) => {
  res.send("전송완료");
  // Db.counter 내의 총게시물갯수라는 이름을 가진 데이터를 찾음
  db.collection("counter").findOne(
    {
      name: "게시물갯수",
    },
    (err, result) => {
      console.log(result.totalPost);
      // 그 데이터의 totalPost 값을 변수에 저장
      let totalPost = result.totalPost;
      // db.post에 새게시물 등록
      db.collection("post").insertOne(
        {
          _id: totalPost + 1,
          할일: req.body.title,
          날짜: req.body.date,
        },
        (err, result) => {
          console.log("저장");
          // counter collection에 있는 totalPost를 1증가
          db.collection("counter").updateOne(
            {
              name: "게시물갯수",
            },
            {
              $inc: {
                totalPost: 1,
              },
            },
            (err, result) => {
              if (err) return console.log(err);
            }
          );
        }
      );
    }
  );
});

app.get("/list", function (req, res) {
  db.collection("post")
    .find()
    .toArray((err, result) => {
      console.log(result);
      res.render("list.ejs", {
        posts: result,
      });
    });
});

// app.delete("/delete", (req, res) => {
//   console.log(req.body);
//   req.body._id = parseInt(req.body._id);
//   db.collection("post").deleteOne(req.body, function (err, result) {
//     console.log("삭제완료");
//     res.status(200).send({
//       message: "성공했습니다",
//     });
//     // 응답코드 2XX 요청 성공, 4XX 실패
//   });
// });

app.delete("/delete/:id", (req, res) => {
  db.collection("post").deleteOne({ _id: parseInt(req.params.id) }, (err, result) => {
    console.log('삭제완료');
    res.status(200).send({message: '성공'});
  });
});

// /detail 로 접속하면 detail.ejs 보여줌
app.get("/detail/:id", (req, res) => {
  db.collection("post").findOne({ _id: parseInt(req.params.id) }, (err, result) => {
    console.log(result)
    // 인터넷이 끊기거나 디비가 이상하거나 그러면 에러가 발생
    // 결과가 없는 경우만 체크하려면
    if(err || !result){
      return res.status(404).send('페이지를 찾을 수 없습니다.'); 
    }
    res.render("detail.ejs", {
      data: result
    });
  });
});

app.put('/edit', (req, res)=>{
  // 폼에 담긴 데이터를 db.collection에 업데이트
  db.collection('post').updateOne({_id : parseInt(req.body.id) },{ $set : {할일: req.body.title, 날짜: req.body.date}},(err, result)=>{
    console.log('수정완료');
    res.redirect('/list');
  })
})

app.get('/login', (req, res) => {
  res.render('login.ejs');
})

app.post('/login', passport.authenticate('local', {failureRedirect: '/fail'}), (req, res) => {
  res.redirect('/');
})

passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'pw',
  session: true,
  passReqToCallback: false,
}, function (입력한아이디, 입력한비번, done) {
  db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
    if (에러) return done(에러)

    if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
    if (입력한비번 == 결과.pw) {
      return done(null, 결과)
    } else {
      return done(null, false, { message: '비번틀렸어요' })
    }
  })
}));

// id를 이용해서 세션을 저장(로그인 성공시)
passport.serializeUser(function(user, done) {
  done(null, user.id)
});
// 이 세션 데이터를 가진 사람을 db에서 찾기
passport.deserializeUser(function (id, done) {
  // 디비에서 user.id로 유저를 찾은 뒤에 유저 정보를 가져옴
  db.collection('login').findOne({id : id}, (err, result) => {
    done(null, result);
  })
  
}); 

app.get('/mypage', loginCheck, (req, res) => {
  console.log(req.user)
  res.render('mypage.ejs', {user : req.user});
});

function loginCheck(req, res, next){
  if(req.user){
    next();
  } else {
    res.send('로그인이 안되어 있음');
  }
}