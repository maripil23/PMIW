//Floch Micaela, Fernandez Maria Pilar. Comisión 1
// link yt
let imagenes = [], textos = [];
let escenaActual;
let anchoCanvas = 640; let altoCanvas = 480;
let miFuente, miFuenteDos, sonido;
let rectanguloPresionado;
let anchorect, altorect, rectposx, rectposy;//rectangulos

function preload() {
  miFuente = loadFont('fonts/rans____.ttf');
  miFuenteDos = loadFont('fonts/arial.ttf');
  sonido = loadSound('data/audio.mp3');
 
  let cantidadImagenes = 17;
  for (let i = 0; i < cantidadImagenes ; i++) {
    let rutasImagenes = 'images/img' + i + '.jpg'; //Guardar ruta: rutasImagenes[images/img0.jpg, images/img1.jpg, images/img2.jpg]
    imagenes[i] = loadImage(rutasImagenes);  //Cargar imagen: imagenes[img0, img1, img2]
  }
}
function setup() {
  escenaActual = 1;
  rectanguloPresionado = "Ninguno"; //Detectar si haces clic afuera de los rectangulos para que no pase nada
  createCanvas(anchoCanvas, altoCanvas); 
  anchorect=160; altorect=60; rectposx=0; rectposy=300; //Posiciones rectangulos 
  cargarTextoCuento();   //Arreglo de textos 
}
function draw() {
  //Mostrar la imagen
  image(imagenes[escenaActual], 0, 0);
  console.log('Escena actual: ' + escenaActual);
  ejecutarRectYText(); //Dibujar rectangulos y texto
}   
function mousePressed() {
  rectanguloPresionado = detectarRectanguloPresionado();  
  ejecutarBotones();
}
//Reseteo apretando la R 
function keyPressed() {
  resetear();
}
