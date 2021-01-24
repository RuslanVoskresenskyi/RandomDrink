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

document.querySelector('#drink-button').addEventListener('click', () => {
    getData('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(drink => {
        getImg(drink.drinks[0].strDrinkThumb + '/preview').then(img => {
            document.querySelector('#drink-img').src = URL.createObjectURL(img)
            document.querySelector('#drink-name').innerText = drink.drinks[0].strDrink
            document.querySelector('#drink-discription').innerText = drink.drinks[0].strInstructions
        })
    })
})




