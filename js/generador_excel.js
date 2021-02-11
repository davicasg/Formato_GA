
/*
Se utiliza la libreria SheetJS para la generación de Archivos en formato Excel

Web oficial: https://sheetjs.com/
Git Hub: https://github.com/SheetJS/sheetjs

*/


//Se crea un libro vacío
var wb = XLSX.utils.book_new();

//Propiedad del libro
wb.Props = {
    Title: "SheetJS Tutorial",
    Subject: "Test",
    Author: "Mesa Gestión Servicios",
    CreatedDate: new Date(2021,02,08)
};

//Se crear una Hoja
wb.SheetNames.push("ID_USUARIO");

var ws_data = [['hello' , 'world']];  //a row with 2 columns


var ws = XLSX.utils.aoa_to_sheet(ws_data);

wb.Sheets["ID_USUARIO"] = ws;

//Exportando el libro

var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

$("#descarga_excel").click(function(){
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Formato.xlsx');
});