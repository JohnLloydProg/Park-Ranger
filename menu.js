const products = [
    {product_code:1, product_name:"Caramel Latte", product_image:"./images/menu/caramel-latte.png", product_prices:["P60.00", "P70.00"]}, 
    {product_code:2, product_name:"Dunk (Kofi Latte)", product_image:"./images/menu/dunk.png", product_prices:["P60.00", "P70.00"]},
    {product_code:3, product_name:"Sea Caramel Coldbrew", product_image:"./images/menu/sea-caramel-coldbrew.png", product_prices:["P60.00", "P70.00"]},
    {product_code:4, product_name:"Black Roasted Coldbrew", product_image:"./images/menu/black-roasted-coldbrew.png", product_prices:["P60.00", "P70.00"]},
    {product_code:5, product_name:"Mocha Uson", product_image:"./images/menu/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:6, product_name:"Choco Lava", product_image:"./images/menu/choco-lava.png", product_prices:["P60.00", "P70.00"]},
    {product_code:7, product_name:"Cream Cheese Coldbrew", product_image:"./images/menu/cream-cheese-coldbrew.png", product_prices:["P80.00", "P90.00"]},
    {product_code:8, product_name:"Milo Cyrus", product_image:"./images/menu/milo-cyrus.png", product_prices:["P70.00", "P80.00"]},
    {product_code:9, product_name:"Matcha-Teh (Matcha Latte)", product_image:"./images/menu/matcha-teh.png", product_prices:["P90.00"]},
    {product_code:10, product_name:"Matcha Gwapito (With Coffee)", product_image:"./images/menu/matcha-gwapito.png", product_prices:["P90.00"]},
    {product_code:11, product_name:"Saigon Experience (Viatnamese)", product_image:"./images/menu/drink-placeholder.png", product_prices:["P80.00"]},
    {product_code:12, product_name:"Vampire Sweetkiss", product_image:"./images/menu/vampire-sweetkiss.png", product_prices:["P70.00", "P80.00"]},
    {product_code:13, product_name:"Pulpy Summarslam", product_image:"./images/menu/pulpy-summerslam.png", product_prices:["P70.00", "P80.00"]},
    {product_code:14, product_name:"Cai Roast", product_image:"./images/menu/drink-placeholder.png", product_prices:["P25.00"]},
    {product_code:15, product_name:"Voltaire", product_image:"./images/menu/drink-placeholder.png", product_prices:["P30.00"]},
    {product_code:16, product_name:"Sikwate", product_image:"./images/menu/drink-placeholder.png", product_prices:["P30.00"]},
    {product_code:17, product_name:"Chocolate Chip Cookie", product_image:"./images/menu/chocolate-chip-cookie.png", product_prices:["P20.00"]}
];
const coldbrews = [1, 2, 3, 4, 5, 6];
const specials = [7, 8, 9, 10, 11];
const fruity = [12, 13];
const hot_shots = [14, 15, 16];
const cookies = [17];

function default_menu() {
    var container = document.getElementById('card-container');
    var radios = document.getElementsByName('products');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (var i = 0; i < products.length; i++) {
        var new_img = document.createElement("img");
        var new_h4 = document.createElement("h4");
        var new_div = document.createElement("div");
        new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
        new_div.className = "card"
        new_img.src = products[i].product_image;
        new_h4.textContent = products[i].product_name;
        new_div.appendChild(new_img);
        new_div.appendChild(new_h4);
        container.appendChild(new_div);
    }   
}

default_menu();

function show_details(product_code) {
    var medium_price = document.getElementById('medium-price');
    var large_price = document.getElementById('large-price');
    medium_price.textContent = "Medium: ";
    large_price.textContent = "Large: ";
    var drink;
    for (var i = 0; i < products.length; i++) {
        if (products[i].product_code == product_code) {
            drink = products[i];
        }
    }
    medium_price.textContent = "Medium: " + drink.product_prices[0];
    if (drink.product_prices.length > 1) {
        large_price.textContent = "Large: " + drink.product_prices[1];
    }
}

function fil(category) {
    var container = document.getElementById('card-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var list_category;
    if (category == "cb") {
        list_category = coldbrews;
    } else if (category == "hs") {
        list_category = hot_shots;
    } else if (category == "s") {
        list_category = specials;
    } else if (category == "f") {
        list_category = fruity;
    } else if (category == "ck") {
        list_category = cookies;
    }
    for (var i = 0; i < products.length; i++) {
        if (list_category.includes(products[i].product_code)){
            var new_img = document.createElement("img");
            var new_h4 = document.createElement("h4");
            var new_div = document.createElement("div");
            new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
            new_div.className = "card"
            new_img.src = products[i].product_image;
            new_h4.textContent = products[i].product_name;
            new_div.appendChild(new_img);
            new_div.appendChild(new_h4);
            container.appendChild(new_div);
        }
    }

}

function search(s) {
    var container = document.getElementById('card-container');
    var radios = document.getElementsByName('products');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (var i = 0; i < products.length; i++) {
        if (products[i].product_name.toLowerCase().includes(s.toLowerCase())){
            var new_img = document.createElement("img");
            var new_h4 = document.createElement("h4");
            var new_div = document.createElement("div");
            new_div.setAttribute("onclick", "show_details("+products[i].product_code+")");
            new_div.className = "card"
            new_img.src = products[i].product_image;
            new_h4.textContent = products[i].product_name;
            new_div.appendChild(new_img);
            new_div.appendChild(new_h4);
            container.appendChild(new_div);
        }
    }
}

window.addEventListener('resize', default_menu);
