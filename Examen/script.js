    // Función para generar las filas de las tablas de inspección
    function generarTabla() {
      // Obtener el número total de cajas
      var totalCajas = parseInt(document.getElementById('total-cajas-empaque').value);
      // Obtener las tallas seleccionadas
      var tallasSeleccionadas = document.getElementById('tallas').value.split(',');
      // Tabla de inspección de empaque
      var colorseleccionado = document.getElementById('colores').value.split(',');
      var numeroreporte = document.getElementById('numero_reporte').value.split('.');
      var tablaEmpaqueBody = document.getElementById('empaque-table').getElementsByTagName('tbody')[0];
      tablaEmpaqueBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
      for (var i = 0; i < totalCajas; i++) {
        for (var j = 0; j < tallasSeleccionadas.length; j++) {
            for (var k = 0; k < colorseleccionado.length; k++) {
                var row = tablaEmpaqueBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var select_cajas = '<select name="defecto1">' +
                    '<option value="Caja dañada">Caja dañada</option>' +
                    '<option value="Etiqueta de envío incorrecta">Etiqueta de envío incorrecta</option>' +
                    '<option value="Falta de embalaje protector">Falta de embalaje protector</option>' +
                    '<option value="Embalaje insuficiente">Embalaje insuficiente</option>' +
                    '<option value="Caja mal sellada">Caja mal sellada</option>' +
                    '<option value="Falta de relleno">Falta de relleno</option>' +
                    '<option value="Dimensiones incorrectas de la caja">Dimensiones incorrectas de la caja</option>' +
                    '<option value="Productos sueltos dentro de la caja">Productos sueltos dentro de la caja</option>' +
                    '<option value="Inconsistencia en el empaquetado">Inconsistencia en el empaquetado</option>' +
                    '<option value="Etiqueta de manejo ausente">Etiqueta de manejo ausente</option>' +
                    '</select>';
                cell1.innerHTML = '<input type="text">';
                cell2.innerHTML = select_cajas;
                cell3.innerHTML = (i + 1) + ' (' + tallasSeleccionadas[j].trim() + ' - ' + colorseleccionado[k].trim() + ')';
                cell4.innerHTML = '<input type="text">';
            }
        }
      }
    }
	  function generarTabla2() {
      // Obtener el número total de prendas
      var totalPrendas = parseInt(document.getElementById('total-prendas-etiquetado').value);
      // Obtener las tallas seleccionadas
      var tallasSeleccionadas = document.getElementById('tallas').value.split(',');
      // Tabla de inspección de etiquetado
      var colorseleccionado = document.getElementById('colores').value.split(',');
      var numeroreporte = document.getElementById('numero_reporte').value.split('.');
      var tablaEtiquetadoBody = document.getElementById('etiquetado-table').getElementsByTagName('tbody')[0];
      tablaEtiquetadoBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
      for (var i = 0; i < totalPrendas; i++) {
        for (var j = 0; j < tallasSeleccionadas.length; j++) {
            for (var k = 0; k < colorseleccionado.length; k++) {
                var row = tablaEtiquetadoBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var select_etiqueta = '<select name="defecto1">' +
                    '<option value="Etiqueta_incorrecta">Etiqueta incorrecta</option>' +
                    '<option value="Información_incompleta">Información incompleta en la etiqueta</option>' +
                    '<option value="Etiqueta_mal_posicionada">Etiqueta mal posicionada</option>' +
                    '<option value="Letras_ilegibles">Letras ilegibles en la etiqueta</option>' +
                    '<option value="Tamaño_de_fuente_incorrecto">Tamaño de fuente incorrecto en la etiqueta</option>' +
                    '<option value="Inconsistencia_de_información">Inconsistencia de información en la etiqueta</option>' +
                    '<option value="Etiqueta_desprendida">Etiqueta desprendida</option>' +
                    '<option value="Etiqueta_mal_fijada">Etiqueta mal fijada</option>' +
                    '<option value="Etiqueta_no_cumple_normativas">Etiqueta que no cumple con las normativas de etiquetado</option>' +
                    '<option value="Error_en_la_composición_del_texto">Error en la composición del texto en la etiqueta</option>' +
                    '</select>';
                cell1.innerHTML = '<input type="text">';
                cell2.innerHTML = select_etiqueta;
                cell3.innerHTML = (i + 1) + ' (' + tallasSeleccionadas[j].trim() + ' - ' + colorseleccionado[k].trim() + ')';
                cell4.innerHTML = '<input type="text">';
            }
        }
      }
    }