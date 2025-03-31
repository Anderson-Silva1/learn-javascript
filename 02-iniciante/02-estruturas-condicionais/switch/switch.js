const getDayName = (day) => {
  switch (day) {
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    default:
      return "Fim de semana";
  }
};

const getColorMessage = (color) => {
  switch (color) {
    case "vermelho":
      return "A cor é vermelho";
    case "azul":
      return "A cor é azul";
    case "verde":
      return "A cor é verde";
    default:
      return "Cor não reconhecida";
  }
};

const getFruitCategory = (fruit) => {
  switch (fruit) {
    case "banana":
    case "maçã":
    case "pera":
      return "Fruta disponível";
    case "abacaxi":
    case "manga":
      return "Fruta tropical";
    default:
      return "Fruta não encontrada";
  }
};

const getNumberType = (number) => {
  switch (true) {
    case number < 0:
      return "Número negativo";
    case number === 0:
      return "Número zero";
    case number > 0:
      return "Número positivo";
    default:
      return "Valor inválido";
  }
};

const getValueType = (value) => {
  switch (value) {
    case 1:
      return "Número 1";
    case "1":
      return "String 1";
    default:
      return "Outro valor";
  }
};

const getAgeCategory = (age) => {
  if (age >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
};

console.log("Dia da semana:", getDayName(3));
console.log("Mensagem de cor:", getColorMessage("azul"));
console.log("Categoria da fruta:", getFruitCategory("banana"));
console.log("Tipo do número:", getNumberType(10));
console.log("Tipo de valor:", getValueType("1"));
console.log("Categoria de idade:", getAgeCategory(20));
