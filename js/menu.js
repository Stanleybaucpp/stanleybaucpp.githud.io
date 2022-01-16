const hambur = document.querySelector('.hambur');
const menu = document.querySelector('.nav-menu');

console.log(menu)
console.log(hambur)

hambur.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hambur){
        menu.classList.toggle("spread")
    }
})