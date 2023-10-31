class Product {
  name;
  category;
  price;
  #quantity; //creating a private property
  #rating;

  constructor(name, category, price, quantity, rating) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.#quantity = this.setQuantity(quantity);
    this.setRating = rating;
    return this;
  }

  getQuantity() {
    return this.#quantity;
  }

  setQuantity(quantity) {
    if (quantity >= 0) {
      this.#quantity = quantity;
      return this.#quantity;
    }
    throw new Error("Quantity cant be negative");
  }

  //if we want to use set and get method as a varibale
  get getRating() {
    return this.#rating;
  }

  set setRating(rating) {
    if (rating < 0) {
      throw new Error("Rating cant be negative");
    }
    this.#rating = rating;
    return this.#rating;
  }
}
let p;
try {
  p= new Product("wdcw", "wc", 444, -10, -3);
  console.log(p);
} catch (error) {
   console.log(error.message);
}


//construction function

function Student(name,rn,course){
    this.name = name;
    this.rollnumber = rn;
    this.course = course;
}

let s1 = new Student("Sachin",20464248,"B.tech");
console.log(s1);



// Strategy pattern