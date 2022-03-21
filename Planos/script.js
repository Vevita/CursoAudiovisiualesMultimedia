

// Array que lista los nombres de archivo de las fotos
let fotos = [
  'general.jpg',
  'americano.jpg',
  'primerplano.jpg',
  'granprimerplano.jpg',
  'medio.jpg',
  'nadir.jpg',
  'cenital.jpg',
  'picado.jpg',
  'contrapicado.jpg'
];

// Texto que aparecerá para definir a cada foto (el orden coincide perfect con el del array superior)
let tipo = [
  'plano general',
  'plano americano',
  'primer plano',
  'gran primer plano',
  'plano medio',
  'plano nadir',
  'plano cenital',
  'plano picado',
  'plano contrapicado'
];

//almacena el valor aleatorio (que ese asociará a un plano aleatorio sacado del array fotos)
let plano;

// variable que almacena los puntos optenidos
let puntos = 0;

// variable que almacena el turno por el que vamos
let turno = 0;

// esta función (bajada de internet) devuelve un número aleatorio dentro de un mínimo y un máximo aportado como atributo. aleatorio(0,15)
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Carga una imagen en relación a un número aleatorio
function cargarimg() {
  // almacenamos el valor aleatorio que genera la función aleatorio() en una variable llamada plano
  plano = aleatorio(0, fotos.length - 1);
  // cargamos la imagen que corresponda a la posición del array de el número aleatorio almacenado en la variable plano
  document.getElementById("foto").src = "img/" + fotos[plano];
  // sumamos +1 a la variable turno
  turno++;
  // mostramos por pantalla la puntuación y turno actual
  document.getElementById('puntuacion').innerHTML = puntos+" puntos de "+turno+" turnos.";
}


// Función que comprueba que la respuesta seleccionada por el jugador en el imput select es la correcta
function respuesta(){  
  // creamos una variable que se destruirá al finalizar la función. Esta variable almacenará un texto.
  let texto = "";
  // optenemo el valor del desplegable imput y lo almacenamos en la variable seleccionado
  let seleccionado = document.getElementById("seleccion").value;
  
  //INICIO DE LAS COMPROBACIONES IF ELSE {
  //comprobamos si el valor de la variable seleccionado es igual (==) que el de la variable plano (que era un valor aleatorio)
  if (seleccionado == plano){
    // si lo es: añadimos a la variable texto el texto "Correcto_"
    texto += "Correcto, ";
    // y sumamos 1 a la variable puntos
    puntos++;
       
  }
  // Si no se da el caso anterior...
  else {
    // añadimos a la variable texto el texto "Incorrecto_"
    texto += "Incorrecto, ";
  }
// FIN DE LAS COMPROBACIONES IF/ELSE }

  // En la vaiable texto le añadimos el texto "el plano es " + el texto optenido de el array que almacena los textos que se relacionaban con las imágenes
  texto += "el plano es "+tipo[plano]+".";
  // sacamos por pantalla toda la información que está almacenando la variable texto.
  document.getElementById("mensaje").innerHTML=texto;
    // mostramos por pantalla la puntuación y turno actual

  document.getElementById('puntuacion').innerHTML = puntos+" puntos de "+turno+" turnos.";
}


// cargamos una imagen aleatoria al iniciarse la página web
cargarimg();