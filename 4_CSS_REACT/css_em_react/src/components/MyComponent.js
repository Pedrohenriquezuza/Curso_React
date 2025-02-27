import "./MyComponent.css";
{
  /* IMPORTANDO O ARQUIVO CSS PARA ESSE COMPONENTE*/
}

const MyComponent = () => {
  return (
    <>
      <h1>CSS de Componente</h1>
      <p>Este é o paragrafo do componente</p>
      <p className="my-comp-paragraph">Este tb é do componente</p>
    </>
  );
};

export default MyComponent;
