$(document).ready(function () {
  creacionPaleta(nombreColores);
  creacionGrilla(grillaPixeles);
  //agregarEventos();
});

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
    indicador = colorActual;
  })
);

var paleta = document.getElementById('paleta');
function creacionPaleta(nombreColores) {
  for (i = 0; i <= nombreColores.length; i++) {
    console.log(nombreColores[i])
    var divPaleta = document.createElement("div");
    divPaleta.style.backgroundColor = nombreColores[i];
    divPaleta.className = 'color-paleta';
    paleta.appendChild(divPaleta);
    divPaleta.addEventListener('click', elegirColor);
  }
}

var grillaPixeles = document.getElementById('grilla-pixeles');
var mouseDown = false;

function creacionGrilla(grillaPixeles) {
  for (i = 0; i <= 1750; i++) {
    var divGrilla = document.createElement("div");
    grillaPixeles.appendChild(divGrilla);
    divGrilla.addEventListener("click", pintarPixel);
    divGrilla.addEventListener("mousedown", () => { mouseDown = true });
    divGrilla.addEventListener("mouseup", () => { mouseDown = false });
    divGrilla.addEventListener("mouseover", function (e) {
      if (mouseDown == true) { e.target.style.backgroundColor = indicador }
    });
  }
}

var indicadorColor = document.getElementById("indicador-de-color");
var indicador;

function elegirColor(e) {
  indicador = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = indicador;
};
function pintarPixel(e) {
  e.target.style.backgroundColor = indicador;
};

$('#borrar').on('click', (event) => {
  var $pixeles = $('#grilla-pixeles div');
  $pixeles.animate({
    backgroundColor: 'white'
  }, 1000);
});

$('.imgs li img').on('click', function(event) {
  var superheroe = $(this).attr('id');  
  console.log(superheroe)
  cargarSuperheroe(eval(superheroe));
}); 

$('#guardar').on('click', (event) => guardarPixelArt());

