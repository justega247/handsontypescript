const employees = [
  { name: 'tim', id: 20 },
  { name: 'rob', id: 21 },
  { name: 'jim', id: 22 },
]

const elements = employees.map((item, index) => {
  return `<div>${item.id} - ${item.name}</div>`
})

console.log(elements);
