const drinks = [
    {product_code:1, product_name:"Caramel Latte", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]}, 
    {product_code:2, product_name:"Dunk (Kofi Latte)", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:3, product_name:"Sea Caramel Coldbrew", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:4, product_name:"Black Roasted Coldbrew", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:5, product_name:"Mocha Uson", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:6, product_name:"Choco Lava", product_image:"./images/drink-placeholder.png", product_prices:["P60.00", "P70.00"]},
    {product_code:7, product_name:"Cream Cheese Coldbrew", product_image:"./images/drink-placeholder.png", product_prices:["P80.00", "P90.00"]},
    {product_code:8, product_name:"Milo Cyrus", product_image:"./images/drink-placeholder.png", product_prices:["P70.00", "P80.00"]},
    {product_code:9, product_name:"Matcha-Teh (Matcha Latte)", product_image:"./images/drink-placeholder.png", product_prices:["P90.00"]},
    {product_code:10, product_name:"Matcha Gwapito (With Coffee)", product_image:"./images/drink-placeholder.png", product_prices:["P90.00"]},
    {product_code:11, product_name:"Saigon Experience (Viatnamese)", product_image:"./images/drink-placeholder.png", product_prices:["P80.00"]},
    {product_code:12, product_name:"Vampire Sweetkiss", product_image:"./images/drink-placeholder.png", product_prices:["P70.00", "P80.00"]},
    {product_code:13, product_name:"Pulpy Summarslam", product_image:"./images/drink-placeholder.png", product_prices:["P70.00", "P80.00"]},
    {product_code:14, product_name:"Cai Roast", product_image:"./images/drink-placeholder.png", product_prices:["P25.00"]},
    {product_code:15, product_name:"Voltaire", product_image:"./images/drink-placeholder.png", product_prices:["P30.00"]},
    {product_code:16, product_name:"Sikwate", product_image:"./images/drink-placeholder.png", product_prices:["P30.00"]},
];
const coldbrews = [1, 2, 3, 4, 5, 6];
const specials = [7, 8, 9, 10, 11];
const fruity = [12, 13];
const hot_shots = [14, 15, 16];
var table = document.getElementById('card-container');

var i = 0;
while (i < drinks.length) {
    var new_tr = document.createElement("tr");
    while (new_tr.children.length < 3) {
        console.log(i)
        var new_td = document.createElement("td");
        var new_img = document.createElement("img");
        var new_h4 = document.createElement("h4");
        var new_div = document.createElement("div");
        new_div.setAttribute("onclick", "show_details("+drinks[i].product_code+")");
        new_div.className = "card"
        new_img.src = drinks[i].product_image;
        new_h4.textContent = drinks[i].product_name;
        new_div.appendChild(new_img);
        new_div.appendChild(new_h4);
        new_td.appendChild(new_div);
        new_tr.appendChild(new_td);
        i++;
        if (i == drinks.length) {
            break;
        }
    }
    table.appendChild(new_tr);
}

function show_details(product_code) {
    var medium_price = document.getElementById('medium-price');
    var large_price = document.getElementById('large-price');
    medium_price.textContent = "Medium: ";
    large_price.textContent = "Large: ";
    var drink;
    console.log(product_code)
    for (var i = 0; i < drinks.length; i++) {
        if (drinks[i].product_code == product_code) {
            drink = drinks[i];
        }
    }
    medium_price.textContent = "Medium: " + drink.product_prices[0];
    if (drink.product_prices.length > 1) {
        large_price.textContent = "Large: " + drink.product_prices[1];
    }
}

function fil(category) {
    var table = document.getElementById('card-container');
    while (table.firstChild) {
        table.removeChild(table.firstChild);
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
    }
    var i = 0;
    while (i < drinks.length) {
        var new_tr = document.createElement("tr");
        while (new_tr.children.length < 3) {
            console.log(i)
            if (list_category.includes(drinks[i].product_code)){
                var new_td = document.createElement("td");
                var new_img = document.createElement("img");
                var new_h4 = document.createElement("h4");
                var new_div = document.createElement("div");
                new_div.setAttribute("onclick", "show_details("+drinks[i].product_code+")");
                new_div.className = "card"
                new_img.src = drinks[i].product_image;
                new_h4.textContent = drinks[i].product_name;
                new_div.appendChild(new_img);
                new_div.appendChild(new_h4);
                new_td.appendChild(new_div);
                new_tr.appendChild(new_td);
            }
            i++;
            if (i == drinks.length) {
                break;
            }

        }
        table.appendChild(new_tr);
    }

}

function scrolldetails(event) {
    console.log(event)
}
