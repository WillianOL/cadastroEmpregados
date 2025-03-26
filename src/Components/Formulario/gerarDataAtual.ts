function gerarDataAtual(): string {
  const data = new Date();
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1);
  const dia = String(data.getDate());

  // adiciona um 0 a frente caso o numero tenha só uma casa
  return `${dia.length > 1 ? dia : '0' + dia}-${mes.length > 1 ? mes : '0' + mes}-${ano}`;
}

export default gerarDataAtual;
