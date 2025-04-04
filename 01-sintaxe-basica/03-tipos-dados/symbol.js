const id = Symbol("id");
const pessoa = {
  [id]: 123,
  id: 3242,
};

console.log(pessoa[id]); // 123
