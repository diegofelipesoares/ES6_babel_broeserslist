//arrays de objetos com nome e nota
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 6 },
    { nome: "Daniela", nota: 9 },
    { nome: "Eduardo", nota: 4 }
  ];

  // Função que retorna apenas os alunos com nota >= 6
function filtrarAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
  }
  
  // Testando a função
  const aprovados = filtrarAprovados(alunos);
  console.log("Alunos aprovados:", aprovados);