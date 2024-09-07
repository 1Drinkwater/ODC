let finallProducts=[];
async function getProduct()
{
    let response = await fetch(`https://fakestoreapi.com/products`)
    let finalData = await response.json();
    finallProducts=finalData;
    console.log(finallProducts);
    displayProducts();
    productDetails();
     
}
getProduct();



function displayProducts()
{
    let allProducts =``;
    for (let i = 0; i < finallProducts.length; i++) {
        
         allProducts += `
            <div class="col-md-3 ">
                <div class="product pro">
                    <img class="w-100" src="${finallProducts[i].image}" alt="">
                    <h2>${finallProducts[i].price}</h2>
                    <p>${finallProducts[i].description.split(" ").slice(0,3).join('')}</p>
                    <button onclick="productDetails()" type="button" class="btn btn-primary"> <a href="productDetails.html">more details</a></button>
                </div>
            </div>`
    }
    document.querySelector('#row').innerHTML=allProducts;
}

function productDetails()
{
    let allProducts =``;
    for (let i = 0; i < finallProducts.length; i++) {
        
         allProducts += `
                    <div class="gallery">
            <img class="w-25" src="${finallProducts[i].image}" alt="">
            <img class="w-25" src="${finallProducts[i].image}" alt="">
            <img class="w-25" src="${finallProducts[i].image}" alt="">
        </div class='container'>
        <div class="main-image">
            <img class="w-100" src="${finallProducts[i].image}" alt="">
        </div>
        <div class="content">
            <h2>${finallProducts[i].price}</h2>
            <p>${finallProducts[i].description.split(" ").slice(0,9).join('')}</p>
        </div>`
    }
    document.querySelector('#row').innerHTML=allProducts;
}

