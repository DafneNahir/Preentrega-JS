// STOCK DE HOGAR

let productos = ["leche", "pan", "huevos"];
let stock = [8, 5, 12];

function menu() {
  let opcion;
  do {
    opcion = parseInt(prompt("Menú principal: \n 1 = Ver stock \n 2 = Usar producto \n 3 = Reponer producto \n 4 = Salir"));

    switch (opcion) {
      case 1:
        alert("Stock actual:\n" + "Leche: " + stock[0] + "\nPan: " + stock[1] + "\nHuevos: " + stock[2]);
        break;
      case 2:
        usarProducto();
        break;
      case 3:
        reponerProducto();
        break;
      case 4:
        alert("¡Gracias!");
        break;
      default:
        alert("Elija una opción correcta.");
    }

  } while (opcion !== 4);
}

menu();

const verStock = () => {
  return alert("Leche: " + stock[0] + "\n Pan: " + stock[1] + "\n Huevos: " + stock[2]);
}

function usarProducto() {
  let opcion = parseInt(prompt("¿Qué querés usar? \n 1 = Leche \n 2 = Pan \n 3 = Huevos \n 4 = Salir"));
  if (opcion >= 1 && opcion <= 3) {
    let cantidad = parseInt(prompt("¿Cuánto vas a usar de " + productos[opcion - 1] + "?"));
    if (stock[opcion - 1] >= cantidad) {
      stock[opcion - 1] -= cantidad;
      alert("Usaste " + cantidad + " unidades " + productos[opcion - 1] + ".");
    } else {
      alert("No hay suficiente stock de " + productos[opcion - 1] + ".");
    }
  } else if (opcion === 4) {
    alert("No utilizaste nada esta vez. ¡Entonces vamos a reponer!");
  } else {
    alert("Elija un número correcto, por favor.")
  }
}

function reponerProducto() {
  let opcion = parseInt(prompt("¿Qué querés reponer? \n 1 = Leche \n 2 = Pan \n 3 = Huevos \n 4 = Salir"));
  if (opcion === 4) {
    alert("No repusiste nada esta vez. ¡Terminamos por hoy!")
    return
  }
  if (opcion >= 1 && opcion <= 3) {
    let cantidad = parseInt(prompt("¿Cuánto vas a reponer de " + productos[opcion - 1] + "?"));
    stock[opcion - 1] += cantidad;
    alert("Agregaste " + cantidad + " unidades de " + productos[opcion - 1] + " al stock.");
  }
}

alert("Tu stock final es:\n" + "Leche: " + stock[0] + "\nPan: " + stock[1] + "\nHuevos: " + stock[2]);    
