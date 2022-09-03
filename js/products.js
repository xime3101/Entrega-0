
let categoriesArray = [];
function showCategoriesList(array){ 
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action"> 
            <div class="row">
                <div class="col-3">
                    <img src= "` + category.image + `" alt="product image" class="img-thumbnail">   
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h4>`+ category.name + ` ` + category.currency + ` ` + category.cost +`</h4>
                                <p> `+ category.description +`</p>
                            </div>
                            <small class="text-muted">` + category.soldCount + ` vendidos</small>
                        </div>

                    </div>
            </div>
        </div>
        `
        document.getElementById("autos").innerHTML = htmlContentToAppend; 
    
        
    }
}

let id= localStorage.getItem("catID")
document.addEventListener("DOMContentLoaded", function(e) {
    
    getJSONData(PRODUCTS_URL+ id +EXT_TYPE).then(function(resultObj){

        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            showCategoriesList(resultObj.data.products);
        }
    });
});


document.getElementById("botonfiltrar").addEventListener("click", function filtro(){
    let products= categoriesArray
    let min= document.getElementById("rangeFilterCountMin").value
    let max= document.getElementById("rangeFilterCountMax").value
    let productosFiltrados = products.filter(product => product.cost >= min && product.cost <= max )
    showCategoriesList(productosFiltrados)

})
document.getElementById("ascendente").addEventListener("click", function(){
    let products = categoriesArray
    let preciosordenados= products.sort( function(a, b){
        if (a.cost==b.cost){ return 0};
        if(a.cost < b.cost){ return -1 };
        return 1;
    });
    showCategoriesList(preciosordenados)
})
document.getElementById("descendente").addEventListener("click", function(){
    let products = categoriesArray
    let preciosordenados= products.sort( function (a, b) {
        if (a.cost==b.cost){ return 0};
        if(a.cost > b.cost){ return -1 };
        return 1;
    });
    showCategoriesList(preciosordenados)
})
document.getElementById("relevancia").addEventListener("click", function(){
    let products = categoriesArray
    let ordenados= products.sort( function (a, b) {
        if (a.soldCount==b.soldCount){ return 0};
        if(a.soldCount > b.soldCount){ return -1 };
        return 1;
    });
    showCategoriesList(ordenados)
});

document.getElementById("inputSearch").addEventListener("input", function() {
    let letra= document.getElementById("inputSearch").value;
    let mayuscula= letra.toUpperCase()
    let products= categoriesArray
    let filtrados=products.filter(product => product.name.toUpperCase().includes(mayuscula) )
        showCategoriesList(filtrados)   
    
});

