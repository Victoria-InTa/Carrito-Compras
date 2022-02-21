let section = document.querySelector('.section')
let h2 = document.querySelector('.h2').textContent
let h2_1 = document.querySelector('.h2-1').textContent
let h2_2 = document.querySelector('.h2-2').textContent

let estilo = document.querySelector('.estilo')
let fruta = document.querySelector('.fruta')
let contador = document.querySelector('.contador')

let estilo2 = document.querySelector('.estilo2')
let fruta2 = document.querySelector('.fruta2')
let contador2 = document.querySelector('.contador2')

let estilo3 = document.querySelector('.estilo3')
let fruta3 = document.querySelector('.fruta3')
let contador3 = document.querySelector('.contador3')

let btnUno = document.querySelector('.btn-1')
let btnDos = document.querySelector('.btn-2')
let btnTres = document.querySelector('.btn-3')

let eliminar = document.querySelector('.eliminar')
let eliminar2 = document.querySelector('.eliminar2')
let eliminar3 = document.querySelector('.eliminar3')




eliminar.addEventListener('click', ()=>{
    clicks -- 
    contador.textContent = clicks
})

eliminar2.addEventListener('click', ()=>{
    clicks2 --
    contador2.textContent = clicks2
})

eliminar3.addEventListener('click', ()=>{
    clicks3 --
    contador3.textContent = clicks3
})

clicks = 0
btnUno.addEventListener('click',()=>{
    eliminar.textContent = "🧻"
    clicks ++
    contador.textContent = clicks
    contador.style.width = "25px"
    contador.style.height = "25px"
    contador.style.backgroundColor = "rgb(80, 218, 114)"
    contador.style.border = "2px solid rgb(161, 228, 161)"
    contador.style.borderRadius = "50%"



    fruta.textContent = h2
    estilo.style.width = "100%";
    estilo.style.border = "1px solid grey"
    estilo.style.height = "30px";
    estilo.style.display = "flex"
    estilo.style.alignItems = "center"
    estilo.style.paddingLeft = "1rem"
    
})

clicks2 = 0
btnDos.addEventListener('click',()=>{
    eliminar2.textContent = "🧻"
    clicks2 ++
    contador2.textContent = clicks2
    contador2.style.width = "25px"
    contador2.style.height = "25px"
    contador2.style.backgroundColor = "rgb(80, 218, 114)"
    contador2.style.border = "2px solid rgb(161, 228, 161)"
    contador2.style.borderRadius = "50%"

    fruta2.textContent = h2_1
    estilo2.style.width = "100%";
    estilo2.style.border = "1px solid grey"
    estilo2.style.height = "30px";
    estilo2.style.display = "flex"
    estilo2.style.alignItems = "center"
    estilo2.style.paddingLeft = "1rem"
    
})

clicks3 = 0
btnTres.addEventListener('click',()=>{
    eliminar3.textContent = "🧻"
    clicks3 ++
    contador3.textContent = clicks3
    contador3.style.width = "25px"
    contador3.style.height = "25px"
    contador3.style.backgroundColor = "rgb(80, 218, 114)"
    contador3.style.border = "2px solid rgb(161, 228, 161)"
    contador3.style.borderRadius = "50%"

    fruta3.textContent = h2_2
    estilo3.style.width = "100%";
    estilo3.style.border = "1px solid grey"
    estilo3.style.height = "30px";
    estilo3.style.display = "flex"
    estilo3.style.alignItems = "center"
    estilo3.style.paddingLeft = "1rem"
    
})
