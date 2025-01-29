const menu = document.querySelectorAll('.about__nav-list .about__link')
const contentSections = document.querySelectorAll('.contenido')

menu.forEach(link => {
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        const targetContenidoId = e.currentTarget.getAttribute('href').substring(1);

        console.log(targetContenidoId)

        const targetContenido = document.getElementById(targetContenidoId)

        if (targetContenido){
            document.querySelectorAll('section').forEach(section=>{
                section.style.display='none'
            })
            targetContenido.style.display = 'block';
        }
    })
});

