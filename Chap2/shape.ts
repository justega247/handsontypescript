class OnePerson {
  name: string;
}

const jill: { name: string } = {
  name: "Jill"
}

const person: OnePerson = jill;

console.log(person)

// The typescript compiler looks at the shape of a type and is not
// concerned with its name at all.