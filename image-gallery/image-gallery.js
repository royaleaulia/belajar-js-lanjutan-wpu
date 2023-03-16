container = document.querySelector('.container')
thumbs = document.querySelectorAll('.thumb')
jumbo = document.querySelector('.jumbo')

thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function (e) {
        jumbo.setAttribute('src', 'img/' + 'x' + '.jpg')

        // container.removeChild(jumbo)

    })
})


