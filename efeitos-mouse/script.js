
const parent= document.querySelector('.content')
const run= document.querySelector('.segue-mouse')
const span= document.querySelector('.alvo')
const circleParent= document.querySelector('.circleParent')
const circleChild= document.querySelector('.circleChild')
let xColor= ''

// efeito - criar um elemento  
parent.addEventListener('click', (e)=>{
    let x= e.pageX - 12
    let y= e.pageY - 24

    let color= Math.floor(Math.random() * 999999)

    let element= document.createElement('span')
    element.classList.add('alvo')
    element.style.left= `${x}px`
    element.style.top= `${y}px`
    element.textContent= " + "
    element.style.backgroundColor= `#${color}`
    element.style.boxShadow= `${0}px ${5}px ${25}px #${color}`
    e.currentTarget.appendChild(element)
    
    xColor= color
})


// efeito - mouse segue o cursor
window.addEventListener('mousemove', (e)=>{
    let x= e.pageX - 12
    let y= e.pageY - 24

    circleParent.classList.add('active')
    circleParent.style.left= `${x}px`
    circleParent.style.top= `${y}px`
    circleParent.style.backgroundColor= `#${xColor}`
    
    circleChild.classList.add('active')
    circleChild.style.left= `${x}px`
    circleChild.style.top= `${y}px`   
    circleChild.textContent= " + "
})


