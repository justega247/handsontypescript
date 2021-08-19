// class Person {
//   constructor() {}

//   msg: string;

//   speak() {
//     console.log(this.msg);
//   }
// }

// const tom = new Person();
// tom.msg = "hey polly"
// tom.speak()


// class Person {
//   constructor(private msg: string) {}

//   speak() {
//     console.log(this.msg);
//   }
// }

// const tom = new Person("hello");
// // tom.msg = "pop" // Throws an error when trying to compile
// tom.speak();


// class Person {
//   constructor(private readonly msg: string) {}

//   speak () {
//     this.msg = `speak ${this.msg}` // Cannot assign to 'msg' because it is a read-only property.

//     console.log(this.msg);
//   }
// }

// const tom = new Person("hello");
// // tom.msg = "pop" // Throws an error when trying to compile
// tom.speak();
