// This is for search bar in navigation

let search = document.getElementById('search')
search.addEventListener('input',()=>{
    let val=search.value.toLowerCase()
    // Fetching content from cards
    let cards=document.getElementsByClassName('content')
    Array.from(cards).forEach((elem,index)=>{
        let title= elem.children[0].innerText
        let desc= elem.children[1].innerText
        if((title.toLowerCase()).includes(val) || (desc.toLowerCase()).includes(val)){
            document.getElementsByClassName('cards')[index].style.display='block'
        }
        else{
            document.getElementsByClassName('cards')[index].style.display='none'
        }
    })
})