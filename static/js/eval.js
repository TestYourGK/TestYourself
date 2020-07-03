
evaluation()
solutions()

function evaluation(){
    score=0
    let check=JSON.parse(sessionStorage.getItem('ques'))
    let marked=JSON.parse(sessionStorage.getItem('ans'))
    check.forEach((elem,index)=>{
        if(elem.correct_answer==marked[index]){
            score+=10
        }
    })
    document.getElementById('result').innerHTML=`<h2>Score:${score}/100</h2>`

}


function solutions(){
    let check=JSON.parse(sessionStorage.getItem('ques'))
    let marked=JSON.parse(sessionStorage.getItem('ans'))
    let sol=''
    check.forEach((elem,index)=>{
        if(elem.correct_answer==marked[index]){
            background= '#d4edda'
            color= '#155724'
        }
        else{
            background= '#f8d7da'
            color='#721c24'
        }
        sol+=`<div style="background: ${background};color:${color};">
                <div><strong>${elem.ques}</strong></div>
                <div><strong>Correct Answer:</strong> ${elem.correct_answer}</div>
                <div><strong>Your Answer:</strong> ${marked[index]}</div>
            </div>`
    })
    document.getElementById('solutions').innerHTML=sol
    document.getElementById('result').innerHTML=`<h2>Score:${score}/100</h2>`

}

