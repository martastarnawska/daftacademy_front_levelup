const allProducts = () => {
  const exposition = document.getElementById("exposition");
  const moreButton = document.getElementById('showAll');

  const product = {
    image: 'https://via.placeholder.com/309x390/000000',
    description: 'great product',
    price: 123,
  }
  // fake products list to be replaced by API data
  const productList = Array(8).fill(product);


  const markup = `
    <div class="row">
      ${productList.map(item => `      
      <div class="tile col-6 col-md-3">
      <img class="tile__photo" src="${item.image}" alt="">
      <div class="tile__description">
        <p>${item.description}</p>
        <p class="tile__price">$ ${item.price}</p>
      </div>
    </div>`
  ).join('')}
    </div>`;

  const showAll = () => {
    exposition.insertAdjacentHTML('beforeend', markup);
    moreButton.classList.add('button--hidden');
  };

  moreButton.addEventListener('click', showAll);
};

export default allProducts;
