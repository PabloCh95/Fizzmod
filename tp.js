/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro.
No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. 
El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
let texto="hola mundo";
function contarVocales(texto) {
  let contvocales=0;
  if(typeof(texto)!="string"){
    return -1
  }else{
  const text1=texto.toLowerCase();
    for(let i=0;i<text1.length;i++){
      if(text1[i]==="a"||
      text1[i]==="e"||
      text1[i]==="i"||
      text1[i]==="o"||
      text1[i]==="u"){
        contvocales++;
      }
    }
    return contvocales;
  }
    
}
console.log(contarVocales(texto));
/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  const URL="https://github.com/PabloCh95/Fizzmod.git"
  return URL;
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros.
La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y 
hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. 
En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
//falta resolver..
class Ejercicio{
  
    constructor(texto){
      this.texto=texto;
    }
    //Metodos
    contadorPalabras(){
        let contWord= this.texto.trim().replace(/\s+/gi, ' ').split(' ').length;
        return contWord;
    }
    hayNumeros(){
      let torf=false;
    for(let i=0;i<10;i++){
      if(this.texto.indexOf(`${i}`)>-1){
        torf=true;
        return torf;
      }
    }
    }

}
const crearClase = () => {
    let n1 = new Ejercicio("Hola mundo");
    n1.contadorPalabras();
    n1.hayNumeros();
    return n1;
}
crearClase();

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
