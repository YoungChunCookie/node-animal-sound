

// https://www.npmjs.com/package/express 예제

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello express World')
// })

// app.listen(3000)


// https://expressjs.com/ko/starter/hello-world.html 예제

const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello EXPRESS World!')
})

app.get('/dog', (req, res) => {
  res.send({'sound':'멍멍'})
})

app.get('/puppy', (req, res) => {
  res.json({'sound':'멍멍'})     //json 데이터를 보낸다고 명시해줌 send 써도 똑같음
})

app.get('/cat', (req, res) => {
  res.send('야옹')
})

app.get('/user/:id', (req, res) => {   // 변수로 라우팅
  const q = req.params                 //http://localhost:3000/user/dkdk 이렇게 호출
  console.log(q.id)
  res.send({'userid': q.id})
})

app.get('/yap/:id', (req, res) => {   // 쿼리로 라우팅
  const q = req.query                 //http://localhost:3000/yap/asdf?surname=yang&name=youngchun 이렇게 호출
  console.log(q)

  const b = req.body;                 // post 방식은 body 에 넣어서 한다 
  console.log(b)                      // fetch, axios 도 post 방식
  res.send({})
})

app.get('/sound/:name', (req,res) => {  //http://localhost:3000/sound/dog  
  const {name} = req.params            // params 에 있는 name 을 바로 받음
                                      // { 'name' : 'dog'} 에서 dog 이라는 값이 바로 들어옴
  if(name == 'dog') {
    res.json({'sound': '멍멍'})
  }else if(name == 'cat') {
    res.json({'sound': '야옹'})
  }else if(name == 'pig') {
    res.json({'sound': '뉴 꿀꿀꿀'})
  }else{
    res.json({'sound': '알수없음'})
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
