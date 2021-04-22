const images = document.querySelectorAll('.img-box img');
const controls = document.querySelectorAll('.controls div');


controls.forEach((link, idx) => {

    link.addEventListener('click', () => {
        if (images[idx].classList.contains('active')) {
            return
        } else {
            resetImg()
        }

        images[idx].classList.add('active')

        // setTimeout(() => {
        //     images[idx].classList.add('active')
        // }, 50);

    })
})

function resetImg() {

    images.forEach(img => {
        img.classList.remove('active')
    })
}