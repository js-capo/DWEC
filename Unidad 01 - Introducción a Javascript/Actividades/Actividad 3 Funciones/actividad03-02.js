const negrita = function(texto) {
    return `<strong>${texto}</strong>`;
}
const cursiva = texto => `<em>${texto}</em>`;
function textoF(texto, funcion){
    if (funcion){
        return `<div>${funcion(texto)}</div>`;
    } else {
        return `<div>${texto}</div>`;
    }
}
function comprobar(){
    const texto = document.getElementById("texto").value;
    let rdo;
    if (document.getElementById("negrita").checked){
        if (document.getElementById("cursiva").checked){
            rdo = textoF(textoF(texto,negrita),cursiva);
        } else {
            /* Función callback negrita. Una función llama a otra función. En este caso textoF, 
            sería la función que llama a la función negrita*/
            rdo = textoF(texto,negrita);
        }
    } else {
        if (document.getElementById("cursiva").checked){
            rdo = textoF(texto,cursiva);
        } else {
            rdo = textoF(texto);
        }
    }
    
    document.getElementById("rdo").innerHTML = rdo;
    
}