//suma, resta, multiplicacion, division, raiz cuadrada y elevar a potencia n

function sum(a, b) {
  return a + b;
}

function min(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

function sqrt(num) {
  try {
    if (num < 0) {
      throw new Error(
        "No se puede calcular la raiz cuadrada de un numero negativo"
      );
    }
    return Math.sqrt(num);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

function pow(a, b) {
  return Math.pow(a, b);
}
