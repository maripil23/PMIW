//Fernández María Pilar
//Comisión 1
//https://youtu.be/MssM2sFAqnM

let nroCuad = 13;       // Numero de cuadrados enteros de la grilla
let grilTam = 400;      // Tamaño de la grilla 400x400 pixeles      
let cuadTam;            // Tamaño del cuadrado entero de la grilla
let cuadTam2;           // Tamaño de medio cuadrado para los bordes de la grilla
let circDiam;           // Diámetro del círculo de la esquina de cada cuadrado de la grilla
let inicX = 400;        // Coordenada "x" para el inicio de la grilla (400 es la mitad de la ventana)
let inicY = 0;          // Coordenada "y" para el inicio de la grilla (0 es la parte superior de la ventana)

// Variables para definir la posición inicial de la grilla con cuadrados de color rojo
let grilRojInicX = 5;    
let grilRojInicY = 5;     

// Variable para determinar el ángulo de inclinación de las líneas sobre los círculos
let anguloDefault = true;        

// Variable para habilitar o deshabilitar la animación con el movimiento con el mouse
let habMovMouse = false;         

function preload(){
  opart=loadImage('data/opart.jpg');
}

function setup() {
  createCanvas(800,400);                  

  background(255);                                   
  strokeWeight(3);                   
  stroke(0);                        
  cuadTam = grilTam / (14);          
  cuadTam2 = cuadTam / 2;            
  circDiam = cuadTam / 2;            
}

function draw() {
  background(255);                   // Establece el color de fondo blanco
  image(opart, 0, 0);                // Dibujar la imagen en las coordenadas x=0 , y=0
  
  // Dibujar la grilla comenzando desde (400, 0)
  for ( i = 0; i <= 14; i++) {        // Bucle "for" de la coordenada "x" para dibujar los cuadrados de la grilla
    for ( j = 0; j <= 14; j++) {      // Bucle "for" de la coordenada "y" para dibujar los cuadrados de la grilla
      let x;                                                 
      let y;                                       
      if (i == 0) {                                 
        x = inicX;                                   
      } else {                                       
        x = inicX + cuadTam2 + (i - 1) * cuadTam;    
      }
      if (j == 0) {                                  
        y = inicY;                                   
      } else {                                       
        y = inicY + cuadTam2 + (j - 1) * cuadTam;    
      }
   // Determinar si se se va a dibujar 1/2 cuadrado o un cuadrado entero      
      let w;                                       
      let h;                                       
      if (i == 0 || i == 14) {                        
        w = cuadTam2;                                
      } else {                                       
        w = cuadTam;                                 
      }
      if (j == 0 || j == 14) {                        
        h = cuadTam2;                                
      } else {                                       
        h = cuadTam;                                
      }
      
      // Determinar si el cuadrado está en el centro de la grilla
      let cuadCentro;                            // Variable auxiliar para considerar que el cuadrado que se está dibujando pertenece al centro de la grilla
     
      cuadCentro = i >= grilRojInicX && i < grilRojInicX + 5 && j >= grilRojInicY && j < grilRojInicY + 5;          
                                                                                                                    
                                                                                                                    
      // Asignar color al cuadrado en función de la posición. Si pertenece o no al centro de la grilla
      fill(defColorCuad(cuadCentro));               
      
      rect(x, y, w, h);                             
      
      // Dibujar los círculos y las líneas
      
      if (i > 0 && j > 0 && i <= 14 && j <= 14) { 
      let cuadCentroLinea;    
      
      
       cuadCentroLinea = i >= grilRojInicX && i < grilRojInicX + 6 && j >= grilRojInicY && j < grilRojInicY + 6;
                         
       
       dibujarForma(x, y, circDiam, cuadCentroLinea);
      }
    }
  }
}

      // Función para dibujar el círculo y la línea inclinada, ambos en las esquinas de los cuadrados
      function dibujarForma( x,  y,  diametro, CuadradoCentral) {  // Esta función tiene 4 parámetros:
      fill(0);                                 
      ellipse(x, y, diametro, diametro);       

      // Dibujar líneas blancas inclinadas sobre los círculos
      let longLinea = diametro / sqrt(2);            // Longitud de la línea diagonal dentro del círculo
      stroke(255);                                  
      strokeWeight(4);                                 

  if (CuadradoCentral) {                          // Si esta "CuadradoCentral" tiene valor 1 significa que es un cuadrado de la grilla central de 5x5 cuadrados
    if (anguloDefault) {                          // Si esta variable "anguloDefault" tiene valor 1
                                                  // Dibujar la línea con ángulo de 45 grados
      line(x - longLinea / 2, y - longLinea / 2, x + longLinea / 2, y + longLinea / 2);
    } else {                                       // de lo contrario (anguloDefault = 0)
                                                   // Dibujar la línea con ángulo de 135 grados
      line(x - longLinea / 2, y + longLinea / 2, x + longLinea / 2, y - longLinea / 2);
    }
  } else {                                         // Si NO es un cuadrado de la grilla central de 5x5 cuadrados (CuadradoCentral = 0)
    if (anguloDefault) {                           // Si esta variable booleana tiene valor 1
                                                   // Dibujar la línea con ángulo de 135 grados
      line(x - longLinea / 2, y + longLinea / 2, x + longLinea / 2, y - longLinea / 2);
    } else {                                       // de lo contrario
                                                   // Dibujar la línea con ángulo de 45 grados
      line(x - longLinea / 2, y - longLinea / 2, x + longLinea / 2, y + longLinea / 2);
    }
  }

  strokeWeight(3);                             // Restaurar grosor de las líneas
  stroke(0);                                   // Restaurar color negro del borde
}
 // Función con valor de retorno "int" para obtener el color de los cuadrados de la grilla 
  function defColorCuad (cuadCentro) {
  if (cuadCentro) {
    return color(200, 55, 28);                 // Devuelve el color rojo para los cuadrados del centro
  } else {
    return color(96, 148, 146);                // Devuelve el color celeste para los cuadrados fuera del centro
  }
}

// Evento "click izquierdo" del mouse
function mousePressed() {
  if (mouseButton == LEFT) {                   // Al pulsar el botón izquierdo del mouse
    habMovMouse = !habMovMouse;                // se invierte el estado de esta variable 
    if (!habMovMouse) {                         
      grilRojInicX = 5;                       
      grilRojInicY = 5;
      anguloDefault = true;                    // y el ángulo de inclinacón de las líneas
      redraw();                                // Cargo nuevamente la ventana
    }
// Evento "click derecho" del mouse
  } else if (mouseButton == RIGHT) {           // Al pulsar el botón derecho del mouse
    anguloDefault = !anguloDefault;            // se invierte el estado de esta variable y cambia el ángulo de inclinación de las líneas
    redraw();                                  // Cargo nuevamente la ventana
  }
}
// Animación a través del movimiento del mouse
function mouseMoved() {
   let nuevGrilRojInicX;                       // Variable auxiliar para almacenar la coordenada "x" de inicio de la grilla de color rojo
   let nuevGrilRojInicY;                       // Variable auxiliar para almacenar la coordenada "y" de inicio de la grilla de color rojo
  if (habMovMouse) {                           
    nuevGrilRojInicX = constrain((map(mouseX, 0, width, 0, nroCuad - 3)), 1, nroCuad - 3);
    nuevGrilRojInicY = constrain((map(mouseY, 0, height, 0, nroCuad - 3)), 1, nroCuad - 3);

    if (nuevGrilRojInicX != grilRojInicX || nuevGrilRojInicY != grilRojInicY) {
      grilRojInicX = nuevGrilRojInicX;        
      grilRojInicY = nuevGrilRojInicY;        
      redraw();                               // Cargo nuevamente la ventana
    }
  }
}
