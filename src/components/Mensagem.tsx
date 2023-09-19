// PascalCasing - Primeira letra é Maiúscula
function Mensagem() {
  // JSX: JavaScript XML
  const nome = 'Bruno Parreira';
  if (nome)
    return <h1>Olá {nome}</h1>
  return <h1>Olá Mundo</h1>
}

export default Mensagem;
