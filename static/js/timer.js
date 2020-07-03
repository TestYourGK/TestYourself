let timer = document.querySelector('#timer')
let now = new Date()
console.log(now)

let hr=now.getHours()
let min=now.getMinutes()
let seconds=now.getSeconds()
let reqTime=new Date(new Date().getTime()+2700000)
let m=29
let s=59
let myVar=setInterval(()=>{
    timer.innerText=`${(m>9)?''+m:'0'+m}:${(s>9)?''+s:'0'+s}`
    s--
    if(s<0){
        s=59
        m--
    }

    

   
},1000)
setTimeout(()=>{
    window.location.href='/result'
    clearInterval(myVar)
    getMarkedAnswers()
},1800000)

