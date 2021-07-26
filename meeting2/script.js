class Cat {
  constructor(name, color, bread) {
    this.name = name;
    this.color = color;
    this.bread = bread;
  }
  sayMeow() {
    console.log("Meow!");
  }
}

const myCat = new Cat("Kitty", "white", "british");
console.log(myCat);
