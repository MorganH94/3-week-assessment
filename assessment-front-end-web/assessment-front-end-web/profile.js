console.log('JS Connected!')

let favColor = document.querySelector('#color')

const favoriteColor = () => {
    alert('Green is the best color ever!')
}

favColor.addEventListener('click', favoriteColor)



let favPlace = document.querySelector('#place')

const favoritePlace = () => {
    alert('My favorite would probably have to be my bed')
}

favPlace.addEventListener('click', favoritePlace)



let favRitual = document.querySelector('#ritual')

const favoriteRitual = () => {
    alert('My favorite ritual is listening to my favorite songs on a loop 24/7')
}

favRitual.addEventListener('click', favoriteRitual)

