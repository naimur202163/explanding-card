const panel=document.querySelectorAll('.panel');

panel.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// console.log(panel)

const removeActiveClasses=()=>{
    panel.forEach((panel,index)=>{
panel.classList.remove('active')
    })
}