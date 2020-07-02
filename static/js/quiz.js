let num =document.getElementById('num').innerText
    let level =document.getElementById('level').innerText
    start(num,level)


function start(num,level){
  url=`https://opentdb.com/api.php?amount=10&category=${num}&difficulty=${level}&type=multiple`
  console.log(url)
  fetch(url).then(response => response.json()).then(data => {
    console.log(data)
    sessionStorage.setItem('ques',JSON.stringify([]))
    quiz(data)

  })
}
function quiz(data) {
  data.results.forEach((elem) => {
    let que = elem.question
    let correctAns = elem.correct_answer
    let incorrectAns = elem.incorrect_answers
    l = incorrectAns
    l.push(correctAns)
    let a = Math.floor(4 * Math.random())
    let change = l[a]
    l[3] = change
    l[a] = correctAns

    let set = document.querySelector('.swiper-wrapper')
    let Obj = JSON.parse(sessionStorage.getItem('ques'))
    let put = {
      ques: que,
      options: l,
      correct_answer: correctAns
    }
    Obj.push(put)
    sessionStorage.setItem('ques', JSON.stringify(Obj))

  })
  displayQues()
}


function displayQues() {
  let paper = sessionStorage.getItem('ques')
  Obj = JSON.parse(paper)
  Array.from(document.querySelector('.swiper-wrapper').children).forEach((elem, index) => {
    elem.innerHTML = `<div>${Obj[index]['ques']}</div>
   <div class='options'>
      <div><input type="radio" name="que${index}" value="${Obj[index].options[0]}">${Obj[index].options[0]} </div> 
      <div><input type="radio" name="que${index}" value="${Obj[index].options[1]}">${Obj[index].options[1]} </div>
      <div><input type="radio" name="que${index}" value="${Obj[index].options[2]}">${Obj[index].options[2]} </div>
      <div><input type="radio" name="que${index}" value="${Obj[index].options[3]}">${Obj[index].options[3]} </div>
    </div>`
  })
}

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

