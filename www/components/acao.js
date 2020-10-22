// This is a JavaScript file

$(document).on("click","#somar",function(){ 
    var valor1 = $("#valor1").val ();
    var valor2 = $("#valor2").val ();

    var resultado = parseFloat(Valor1) + parseFloat(Valor2);

    $("#resultado").val(resultado);
});