const widgets = [
  { id: 1, colour: 'blue' },
  { id: 2, colour: 'yellow' },
  { id: 3, colour: 'orange' },
  { id: 4, colour: 'blue' },
]

console.log('Some are blue', widgets.some(item => item.colour === 'blue'));
console.log('Every one is blue', widgets.every(item => item.colour === 'blue'));

