const getData = async (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

const getImg = async (url) => {
    const response = await fetch(url)
    const blob = await response.blob()
    return blob
}

document.querySelector('#drink-button').addEventListener('click', async () => {
    const drink = await getData('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const { strDrinkThumb, strDrink, strInstructions } = drink.drinks[0];
    const imgUrl = strDrinkThumb + '/preview';

    const img = await getImg(imgUrl);

    document.querySelector('#drink-img').src = URL.createObjectURL(img);
    document.querySelector('#drink-name').innerText = strDrink;
    document.querySelector('#drink-discription').innerText = strInstructions;
});



