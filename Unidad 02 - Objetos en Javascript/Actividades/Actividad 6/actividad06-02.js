function euromillon() {
  let nums = "";
  let count = 0;
  let used = "";
  
  while (count < 5) {
    let n = Math.floor(Math.random() * 50) + 1;
    let strN = " " + n;
    // Verificar si ya está usado (buscando en la cadena de usados)
    if (used.indexOf(strN) === -1) {
      nums += strN;
      used += strN;
      count++;
    }
  }
  
  // Generar 2 estrellas únicas entre 1 y 12
  let stars = "";
  let count2 = 0;
  let used2 = "";
  
  while (count2 < 2) {
    let e = Math.floor(Math.random() * 12) + 1;
    let strE = " " + e;
    if (used2.indexOf(strE) === -1) {
      stars += strE;
      used2 += strE;
      count2++;
    }
  }
  
  return nums + " : " + stars;
}

console.log(euromillon());