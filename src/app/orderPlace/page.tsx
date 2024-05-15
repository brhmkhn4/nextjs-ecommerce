
function OrderPlace() {

  // This function is created to place new order and receive order in response if every went well.


const postUrl = "https://simple-books-api.glitch.me/orders"
const token = 'f11bd8527b76bed51310c5bde8804cd35e48d93160d9c43c4548133bd660b121'

const orderDetails ={
  bookId: 1,
  customerName: "M Ibrahim"
}

let isOrderPlace = false;
if(isOrderPlace == false){
  placeOrder();
}
let thisOrder = undefined;

async function placeOrder () {
    const post = await fetch(postUrl, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(orderDetails)
     })

     if(!post.ok) {
      throw new Error(`Something went wrong, status: ${post.status}`),
      console.log("error occured")
     }

     const data = await post.json()     
     thisOrder = data.orderId;
     console.log(thisOrder)
     isOrderPlace = true
   }

  
  return (
    <div></div>
  )
}

export default OrderPlace