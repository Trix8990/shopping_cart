/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  {
    name: "Carton of Cherry",
    price: 9.00,
    quantity: 0,
    productId: 100,
    image: "./images/cherry.jpg"
  },

  {
    name: "Carton of Orange",
    price: 10.00,
    quantity: 0,
    productId: 101,
    image: "./images/orange.jpg"
  },

  {
    name: "Carton of Strawberry",
    price: 5.00,
    quantity: 0,
    productId: 102,
    image: "./images/strawberry.jpg"
  },

];


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/



/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];



/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
    products.forEach((items) => {
      // compares function argument with the productId 
      if(items.productId === productId) {
        //Updates quantity by 1
        items.quantity+=1
        if(!cart.includes(items)) {
          //If cart doesn't include product add product to cart
          cart.push(items)
        }

      }
    }) 

};



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
    cart.forEach((items) => {
      if(items.productId === productId) {
        //Increase product quantity in cart by 1
        items.quantity+=1

      }
    })
}




/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
    cart.forEach((items) => {
      if(items.productId === productId) {
        //decrease product quantity in cart by 1
        items.quantity-=1

      }
      //if the function decreases the quantity to 0, the product is removed from the cart using the splice method
      if(items.productId === productId && items.quantity === 0) {
        cart.splice(cart.indexOf(items),1)
      }
    })
}




/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  //removes product completely from cart using the splice method
    cart.forEach((items) => {
      if(items.productId === productId) {
        items.quantity = 0
        cart.splice(cart.indexOf(items),1)
      }
    })
}




/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
    let itemTotal = 0
    //treverse through the cart and product array
    cart.forEach((cartItem) => {
      products.forEach((productsItem) => {
        //compares that the cart item name and the product item names are consistent 
        if(cartItem.name === productsItem.name) {
          //takes the item price and multiply by the item quantity
          itemTotal+=cartItem.price*cartItem.quantity
        }
      })
    })
    //return the total amount as a number
    return Number(itemTotal.toFixed(2))
}





/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
  //removes all products from the cart using splice method
  return cart.splice(0,cart.length)

}



/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let totalPay = 0

function pay(amount) {
  //subtract total cart amount from total paid 
    totalPay=totalPay + amount
    let remainingBalance=totalPay-cartTotal();
//total paid goes to 0 untill additional payment is submitted
    if(remainingBalance >= 0 ) {
      totalPay=0
      emptyCart()
    }
    return remainingBalance
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
