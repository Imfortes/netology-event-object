document.addEventListener('DOMContentLoaded', function(e) {
    let dropdownValue = document.querySelector('.dropdown__value')
    let dropdownLinkList = document.querySelectorAll('.dropdown__link')

    dropdownValue.addEventListener('click', function(e) {
        e.preventDefault()

        document.querySelector('.dropdown__list').classList.toggle('active')
    })

    dropdownLinkList.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()

            dropdownValue.textContent = e.target.textContent
            document.querySelector('.dropdown__list').classList.remove('active')
        })
    })
})