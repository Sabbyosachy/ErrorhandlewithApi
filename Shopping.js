const AddIteam = () => {
    const nameField = document.getElementById('Product-name');
    const name = nameField.value;
    displayProduct(name);
    // Addto local storage 
    AddproductTocart(name);
    // display into ui

    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = (cart) => {
    const cart = localStorage.getItem(cart);
    let cratObj;
    if (cart) {
        cratObj = JSON.parse(cart);
    } else {
        cratObj = {};
    }
    return cratObj;
}
const AddproductTocart = name => {
    const cart = getCart();
    cart[name] = 1;
    console.log(cart);
}