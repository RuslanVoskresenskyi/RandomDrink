function getRandomInt(min, max) {
    return Math.floor((Math.random() * Math.floor(max - min)) + min)
}

const getData = async (url) => {
    let response = await fetch(url)
    let data = response.json()
    return data
}

const getImg = async (url) => {
    let response = await fetch(url)
    let blob = await response.blob()
    return blob
}

// document.querySelector('#drink-button').addEventListener('click', () => {
//     getData('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then(data => {
//         getData('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + data.drinks[getRandomInt(0, 99)].strIngredient1).then(drink => {
//             getImg('https://www.thecocktaildb.com/images/ingredients/' + drink.ingredients[0].strIngredient + '.png').then(img => {
//                 document.querySelector('#drink-img').src = URL.createObjectURL(img)
//                 document.querySelector('#drink-name').innerText = drink.ingredients[0].strIngredient
//                 document.querySelector('#drink-discription').innerText = drink.ingredients[0].strDescription
//             })
//         })
//     })
// })


document.querySelector('#drink-button').addEventListener('click', () => {
    getData('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(drink => {
        getImg(drink.drinks[0].strDrinkThumb + '/preview').then(img => {
            document.querySelector('#drink-img').src = URL.createObjectURL(img)
            document.querySelector('#drink-name').innerText = drink.drinks[0].strDrink
            document.querySelector('#drink-discription').innerText = drink.drinks[0].strInstructions
        })
    })
})




