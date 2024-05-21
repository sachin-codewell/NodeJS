let cart = ["puma", "adidas", "cargo", "iphone"];

function createOrder(cartItem) {
  return new Promise(function (resolve, reject) {
    if (cartItem.length > 0) {
      setTimeout(function () {
        resolve("87yf87wrjhbhwv");
      }, 5000);
    } else {
      console.log("something went wrong during order creation");
      reject(null);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      setTimeout(function () {
        console.log("payment successfull");
        resolve("jjwjowjnjw");
      }, 3000);
    } else {
      console.log("something went wrong during payment");
      reject(null);
    }
  });
}

function trackItem(paymentId) {
  return new Promise(function (resolve, reject) {
    if (paymentId) {
      resolve("https:/link.traking?id=lkcnjdlnj&name=kjdkv");
    } else {
      console.log("payment id is wrong or null");
      reject(null);
    }
  });
}

createOrder(cart)
  .then(function (orderId) {
    console.log("order created successfully");
    return proceedToPayment(orderId);
  })
  .then(function (paymentId) {
    console.log("payment successfull");
    return trackItem(paymentId);
  })
  .then(function (trackingLink) {
    console.log(`you can track order from here ${trackingLink}`);
  })
  .catch(function (err) {
    console.log(err);
  });
