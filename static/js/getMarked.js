
document.getElementById('end').addEventListener('click',getMarkedAnswers)

function getMarkedAnswers(){
    let options=document.getElementsByClassName('options')
    let answers=new Array()
    Array.from(options).forEach(elem=>{
        k=false
        Array.from(elem.children).forEach(child=>{
            if(child.children[0].checked){
                answers.push(child.children[0].value)
                k=true
            }
        })
        if(!k){
            answers.push("Unattempted")
        }
    })
    sessionStorage.setItem('ans',JSON.stringify(answers))
}