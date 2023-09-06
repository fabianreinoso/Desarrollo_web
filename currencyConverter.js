const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bienvenido al Convertidor de Moneda Básico');
console.log('Este programa convierte una cantidad de dólares a euros utilizando una tasa de cambio fija.');

rl.question('Por favor, ingresa la cantidad en dólares que deseas convertir: ', (dollars) => {
  const cambio_fijo = 0.83;
  const euros = dollars * cambio_fijo;
  console.log(`${dollars} dólares son ${euros.toFixed(2)} euros.`);
  rl.close();
});
