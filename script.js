// First, tell us your name
let yourName = "Miguel Cruz " 

// We'll use these variables to track the counts of each cookie type
let gb = 1 // Gingerbread
let cc = 2 // Chocolate Chip
let sugar = 3 // Sugar Sprinkle

let quantity = 1;
let quantityContainer = document.querySelector('.total-quantity');

let positiveBtn = document.getElementById('quantity-up');
positiveBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.textContent = `Quantity: ${quantity}`;
});

const credit = document.querySelector('#credit')

let negativeBtn = document.getElementById('quantity-down');
negativeBtn.addEventListener('click', function(){
    if (quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = `Quantity: ${quantity}`;
})

const gbPlusBtn = document.querySelector('#add-Chocolate Chip')



