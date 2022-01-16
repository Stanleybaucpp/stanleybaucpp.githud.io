const imagenes = document.querySelectorAll('.img-history')
const imagenesLight = document.querySelector('.agg-img')
const contenedorLigt = document.querySelector('.imagen-light')
const hambur1 = document.querySelector('.hambur')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
       
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLigt.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigt.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hambur1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLigt.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hambur1.style.opacity = '0'
}

