import getProducts from './getProducts';

const createItem = (imageUrl, productName, productPrice) => {
  const itemMarkup = `
  <div class="stall stall--small col-12 col-sm-6 col-md-4 col-lg-3">
    <img class="stall__picture" src="https://${imageUrl}" alt="">
    <div class="stall__description stall__description--bottom"> 
        <p class="stall__title">${productName}</p>
        <a href="#">${productPrice}</a>       
    </div>
  </div>
  `
  return itemMarkup;
}

const createSliderItems = async () => {
  const itemsList = await getProducts(27871);
  const sliderRows = document.getElementsByClassName('slider__row');

  itemsList.map((item, index) => {
    const newItem = createItem(item.imageUrl, item.name, item.price.current.text);
    if (index < 4) {
      sliderRows[0].insertAdjacentHTML('beforeend', newItem)
    } else {
      sliderRows[1].insertAdjacentHTML('beforeend', newItem)
    }
  })
}

export default createSliderItems;