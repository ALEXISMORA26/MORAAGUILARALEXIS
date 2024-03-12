


// funciones para habilitar/deshabilitar divs con un checkbox
document.addEventListener("DOMContentLoaded", function() {
  var checkboxdivisas = document.getElementById('divisas');
  var checkboxclima = document.getElementById('clima');
  
  var divdivisas = document.getElementById('divisas-d');
  var divclima = document.getElementById('clima-d');
  

  // Añadimos un listener al checkboxdivisas para detectar cambios
  checkboxdivisas.addEventListener('change', function() {
    // Si el checkbox está marcado, habilitamos el div
    if (checkboxdivisas.checked) {
      divdivisas.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divdivisas.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxdivisas no está marcado
  if (!checkboxdivisas.checked) {
    divdivisas.style.display = 'none';
  }


  // Añadimos un listener al checkboxclima para detectar cambios
  checkboxclima.addEventListener('change', function() {
    // Si el checkbox está marcado, habilitamos el div
    if (checkboxclima.checked) {
      divclima.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divclima.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxclima no está marcado
  if (!checkboxclima.checked) {
    divclima.style.display = 'none';
  }

  

  
});




