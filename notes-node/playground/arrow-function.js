let square = x => x * x;
console.log(square(9));

const user = {
  name: "Hinkie",
  sayHi: () => console.log(`Trust the Process, ${this.name}`), //this doesn't bind!
  sayHiAlt() {
    console.log(arguments);
    console.log(`Trust the Process, ${this.name}`);
  }
};

user.sayHiAlt(1,2,3);