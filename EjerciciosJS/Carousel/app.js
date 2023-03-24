const box = document.querySelector('.big-box')
const slide = document.querySelectorAll('.slide')


slide.forEach((eachEle, i) => {
    slide[i].addEventListener('click', () => {
        let position = i
        let multiply = position * -20

        box.style.transform = `translateX(${multiply}%)`


        slide.forEach((eachSlide, i) => {
            slide[i].classList.remove('activo')

        })

        slide[i].classList.add('activo')


    }
    )
})