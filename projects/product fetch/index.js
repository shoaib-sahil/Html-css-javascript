(async () => {

    const productcontainerEl = document.getElementById('productcontainer');
    const searchBtnEl = document.getElementById('searchBtn');
    const url = "https://fakestoreapi.com/products";

    const fetchProduct = async () => {
        try {
            const res = await fetch(url);
            return await res.json()
        } catch (error) {
            return error;
        }

    };
    // console.log(await fetchProduct());

    const products = await fetchProduct();

    const generateProduct = (products) => {
        return `<div class="product_card">
    <div class="image_container">
    <img src="${products.image}">
    </div>
    <div class="product_content">
    <h1>
    ${products.title}
    </h1>
        <p>
            ${products.description}
        </p>
        <button>$ ${products.price}</button>
    </div>

</div>`
    }

    const renderProducts = (products) => {
        productcontainerEl.innerHTML = "";
        products.forEach(product => {
            productcontainerEl.innerHTML += generateProduct(product);

        });
    };
    const filterHandler = (event) => {
        const searchText = event.target.value.toLowerCase();

        const filterProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText) || product.description
            .toLowerCase().includes(searchText)|| product.price.toString()
            .toLowerCase().includes(searchText);
        });
        renderProducts(filterProducts);
        }

searchBtnEl.addEventListener("keyup", filterHandler)
renderProducts(products)
})();