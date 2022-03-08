// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precioMin = document.querySelector("#minimo");
const precioMax = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado");
const max = new Date().getFullYear();
const min = max - 10;

// Crea el objeto de busqueda

const datosBusqueda = {
  marca: "",
  year: "",
  precioMin: "",
  precioMax: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); // Muestra las opciones al cargar la pagina
  añadirOpciones(); // Añade las opciones a los selectores de la pagina
});

// Filtrado de opciones

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});

precioMin.addEventListener("change", (e) => {
  datosBusqueda.precioMin = e.target.value;
  filtrarAuto();
});

precioMax.addEventListener("change", (e) => {
  datosBusqueda.precioMax = e.target.value;
  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});

// Funciones
// Muestra los autos
function mostrarAutos(autos) {
  limpiarHtml(); // Limpia el Html

  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const carro = document.createElement("p");
    carro.innerHTML = `${marca} ${modelo}-${year}-${puertas} puertas -Transmisión: ${transmision}-Precio: $${precio}-Color: ${color}`;
    resultado.appendChild(carro);
  });
}
// Limpia el archivo Html
function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// añade los años al select
function añadirOpciones() {
  for (let i = max; i >= min; i--) {
    const opciones = document.createElement("option");
    opciones.textContent = i;
    opciones.value = i;
    year.appendChild(opciones);
  }
}

// filtra en tiempo real los datos de datos de datos
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMin)
    .filter(filtrarMax)
    .filter(filtrarPuerta)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  console.log(resultado);
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultados();
  }
}

// Muestra el mensaje de que no hay resultados
function noResultados() {
  limpiarHtml();
  const noResultado = document.createElement("div");
  noResultado.classList.add("error", "alerta");
  noResultado.textContent = "No hay resultados, intenta con otros campos";
  resultado.appendChild(noResultado);
}

// Filtra la marca del auto
function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return marca === auto.marca;
  }
  return auto;
}
// Filtrar por años
function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}
// Filtra el precio minimo
function filtrarMin(auto) {
  const { precioMin } = datosBusqueda;
  if (precioMin) {
    return auto.precio >= precioMin;
  }
  return auto;
}
// Filtra el precio máximo
function filtrarMax(auto) {
  const { precioMax } = datosBusqueda;
  if (precioMax) {
    return auto.precio <= precioMax;
  }
  return auto;
}
// Filtra por cantidad de puertas
function filtrarPuerta(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas == puertas;
  }
  return auto;
}
// Filtra por transmision
function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
// Filtrar por color
function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
