// Arquivos de estilos
import TemplateExpressions from "./templateExpressions";

const PrimeiroComponente = () => {

  let x;
  const num = [1, 5, 8]
  return (
    <div>
       {/* Algum Comentário*/}
      <h2>Texto qualquer para encher linguiça</h2>
      <p className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate ipsam </p>

      <TemplateExpressions />
    </div>
  );
};

export default PrimeiroComponente;
