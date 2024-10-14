// creating a getData function to get input data
const getData = () => {
    let productName = document.getElementById('product-Name');
    let productQuantity = document.getElementById('product-Quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    addItem(product, quantity);
    StoreHouse(product, quantity)
}
// creating addItem function to display input data in a list
const addItem = (product, quantity) => {
    let liContainer = document.querySelector('.list-container');
    const listItem = document.createElement('li');
    listItem.innerText = `${product} : ${quantity}`
    liContainer.appendChild(listItem)


}
// creating checkAvilability function to check if the data already in local storge 
// What is the usage of function It looks for device in localStorage if it's there then it applies json parse to convert into a normal object and return it
const checkAvailability = () => {
    let device = {};
    const localdata = localStorage.getItem('device');
    if(localdata){
        device =JSON.parse(localdata);
    } 

    return device
}
// SoreHouse function get arguement on click of add item it gets the normal object from checkAvailability function then add the argument to the object as key and value then stringify the object and set it to local storage   
const StoreHouse = (product,quantity) => {
    const device = checkAvailability()
    device[product] = quantity;
    const deviceStr = JSON.stringify(device)
    localStorage.setItem('device', deviceStr)
    
}
// displayItem function gets object from checkAvailability runs a for in loop gets the object key and value then pass them as argument to addItem function to display on dom
const displayItem = () => {
    const savedData = checkAvailability();
    for (const product in savedData) {
        const quantity = savedData[product]
        console.log(product, quantity)
        addItem(product, quantity)
        }
    }
displayItem()