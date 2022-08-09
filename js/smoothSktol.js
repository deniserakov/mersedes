const linksHead = document.querySelectorAll('.menu-list__link')
const mainScrol = document.querySelectorAll('.main__scroll ')
const newArray = [...linksHead, mainScrol]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})