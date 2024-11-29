
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back') //vincula a classe de mesmo nome

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () =>moveItemOnClick('next')

btnBack.onclick = () =>moveItemOnClick('back')

let listItems = document.querySelectorAll('.list .list-item') //NodeList, ou seja uma lista de divs , "caixas"
let thumbItems = document.querySelectorAll('.thumb .thumb-item')// pegamos todas as divs

console.log(listItems)
console.log(thumbItems)


 
function moveItemOnClick(type){

    if(type==='next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next') 
    }else{
        list.prepend(listItems[listItems.length-1])
        thumb.prepend(thumbItems[thumbItems.length-1])
        container.classList.add('back')// isso é como se eu acrescentasse uma classe no css, dizendo o Rodolfo kk
    }


    setTimeout(() => { //função especial 
        container.classList.remove('next') 
        container.classList.remove('back')
    }, 3000);
    
}

