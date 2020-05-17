import getProducts from './getProducts';

const createTile = (imageUrl, productName, productPrice) => {

  const tileMarkup = `      
  <div class="tile col-6 col-md-3">
    <img class="tile__photo" src="https://${imageUrl}" alt="">
    <div class="tile__description">
      <p>${productName}</p>
      <p class="tile__price">${productPrice}</p>
    </div>
  </div>`

  return tileMarkup;
}

const createExposition = async (category) => {
  const exposition = document.getElementById('basic-exposition');
  const productsList = await getProducts(category);

  productsList.map(product => {
    const newTile = createTile(product.imageUrl, product.name, product.price.current.text)
    exposition.insertAdjacentHTML('beforeend', newTile);
  });
}

export default createExposition;
