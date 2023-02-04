const button = document.querySelectorAll('#inicio')


button.forEach(function(elemento){
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();

        document.getElementById(`${evento.target.innerHTML.toLowerCase()}`).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
    })
})