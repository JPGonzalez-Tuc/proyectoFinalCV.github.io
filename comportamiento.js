// JavaScript source code

// Seteo estos 3 div en display = 'none' porque si no hago esto al abrir la página en Chrome 
// se iniciaban en 'null' y necesito que están en 'none' para que me funcionen los métodos
// para mostrar/ocultar información al hacer click sobre un botón
document.getElementById('infoPadilla').style.display = 'none';
document.getElementById('infoCNEA').style.display = 'none';
document.getElementById('detalleTrab').style.display = 'none';

// Eventos para botones que abren diferentes PDF
document.getElementById('botonPos').addEventListener('click', () => abrirPDF("Gonzalez(MFM).pdf"));
document.getElementById('botonTitulo').addEventListener('click', () => abrirPDF("Titulo.pdf"));
document.getElementById('botonSec').addEventListener('click', () => abrirPDF("Secundario.pdf"));
document.getElementById('botonCient').addEventListener('click', () => abrirPDF("682-Texto.pdf"));

// Eventos para botones que muestran/ocultan diferentes informaciones
document.getElementById('botonHosp').addEventListener('click', () => mostrar_ocultar('infoPadilla', 'botonHosp'));
document.getElementById('botonCNEA').addEventListener('click', () => mostrar_ocultar('infoCNEA', 'botonCNEA'));
document.getElementById('botonTrabajos').addEventListener('click', () => mostrar_ocultar('detalleTrab', 'botonTrabajos'));

// Función para abrir archivos PDF
// La idea es que sea reutilizable y la pueda invocar para abrir distintos archivos PDF
function abrirPDF(archivoPDF) {
    window.open(archivoPDF, "_blank");
}

// Función para mostrar/ocultar información al hacer click sobre un botón
// La idea es que sea reutilizable y la pueda invocar para mostrar ocultar
// diferentes informaciones en distintas partes de la página
// El primer argumento es el div a mostrar/ocultar
// El segundo argumento es el botón que lo realiza

function mostrar_ocultar(info, boton) {
    var dato = document.getElementById(info);
    if (dato.style.display === 'none') {
        document.getElementById(info).style.display = 'block';
        document.getElementById(boton).innerHTML = 'Ocultar';
    }
    else {
        document.getElementById(info).style.display = 'none';
        document.getElementById(boton).innerHTML = 'Ver';
    }
}

