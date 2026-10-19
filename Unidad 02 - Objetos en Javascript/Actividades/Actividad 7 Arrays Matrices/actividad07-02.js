const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Antonio", edad: 45 },
  { nombre: "Jose", edad: 15 },
  { nombre: "Diego", edad: 27 },
  { nombre: "Ana", edad: 18 },
  { nombre: "Maria", edad: 19 }
];

// 1
const nombres = personas.map(persona => persona.nombre);
console.log("Nombres:", nombres);

// 2
const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad);

// 3
const ordenadosPorEdad = [...personas].sort((a, b) => a.edad - b.edad);
console.log("Ordenados por edad:", ordenadosPorEdad);