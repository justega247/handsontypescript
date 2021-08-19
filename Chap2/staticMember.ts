class ClassA {
  static typeName: string;

  constructor() {}

  static getFullName() {
    return `ClassA ${ClassA.typeName}`;
  }
}

const a  = new ClassA();

// console.log(a.typeName); // Property 'typeName' does not exist on type 'ClassA'. Did you mean to access the static member 'ClassA.typeName' instead?

console.log(ClassA.typeName);