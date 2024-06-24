//Ejercicio 1
// Declara una variable utilizando const con el valor de tu nombre y otra utilizando let con el valor de tu edad.
// Imprime ambos valores por consola.
const nameExer1 = "Gabriela";
let ageExer1 = 27;
console.log(nameExer1, ageExer1);

//Ejercicio 2
// Utiliza un template de string para crear una cadena que incluya tu nombre y edad de manera legible.
// Por ejemplo: "Hola, me llamo Juan y tengo 30 años."
const nameAge = `Hola, me llamo ${nameExer1} y tengo ${ageExer1} años.`;
console.log(nameAge);

//Ejercicio 3
// Crea una función que tome dos números como parámetros y devuelva el resultado de sumarlos.
// Utiliza una arrow function para definir la función.
const sum = (a, b) => a + b;
console.log(sum(2, 3));

// Ejercicio 4:
// Crea un array de números y utiliza el método map para duplicar cada número del array.
// Luego, imprime el nuevo array por consola.
const nums = [1, 2, 3, 4];
const doble = nums.map((num) => num * 2);
console.log(doble);

// Ejercicio 5:
//Utiliza el método filter para filtrar los números pares del array creado en el ejercicio anterior.
//Imprime el nuevo array por consola.
const pair = doble.filter((num) => num % 2 === 0);
console.log(pair);

// Ejercicio 6:
// Crea una función que tome un array de números como parámetro y devuelva la suma de todos ellos.
//Utiliza el método reduce para implementar la función.
const numbers = [1, 5, 7, 34, 6];
const suma = (a) => a.reduce((acc, elem) => acc + elem, 0);
console.log(suma(numbers));

// // Ejercicio 7:
// // Utiliza el operador spread para combinar dos arrays en uno solo.
const myArray = [1, 4, 5];
const myArray2 = [3, 4, 5];
const myArray3 = [...myArray, ...myArray2];
console.log(myArray3);

// Ejercicio 8:
// Crea un objeto con información sobre una película, incluyendo título, género y año de estreno.
//Utiliza el destructuring para extraer esta información en variables separadas.
const movie = {
  title: "Toy Story",
  genre: "Animación",
  year: 1995,
};
const { title, genre, year } = movie;
console.log(title, genre, year);

// Ejercicio 9:
// Crea una función que tome un objeto como parámetro y devuelva una cadena con información legible sobre la película.
//Utiliza templates de strings y destructuring para obtener los valores del objeto.

const infoMovie = ({ title, genre, year }) => {
  return `La película ${title} es de género ${genre} y se estrenó en el año ${year}`;
};
console.log(infoMovie(movie));

// Crea una función que tome un número como parámetro y
// simule un error si el número es negativo.
//Utiliza try-catch para manejar el error e imprimir un mensaje de error por consola.

function checkNegative(num) {
  try {
    if (num < 0) {
      throw new Error("El numero es negativo");
    }
    return num;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

//Ejercicio 12
// Combina todos los conceptos aprendidos en los ejercicios anteriores para crear una pequeña aplicación que
// permita al usuario ingresar su nombre y edad en un formulario.
// Al enviar el formulario, la aplicación debe mostrar un mensaje de bienvenida con el nombre y edad ingresados.
const simpleForm = document.getElementById("simpleForm");
simpleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name.trim() === "") {
    displayMessage("Username is required.");
    return;
  } else if (age.trim() === "") {
    displayMessage("Age is required.");
    return;
  } else if (age < 0) {
    displayMessage("Age cannot be negative.");
    return;
  }
  const message = `Hola ${name}, tenes ${age} años. Has sido registrado correctamente.`;
  displayMessage(message);
  simpleForm.reset();
});
function displayMessage(msg) {
  alert(msg);
}
