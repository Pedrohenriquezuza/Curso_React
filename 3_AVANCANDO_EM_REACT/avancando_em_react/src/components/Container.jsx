const Container = ({ children, myValue }) => {
  return (
    <>
      <h2>Este é o titulo do CONTAINER</h2>
      {/* Chamando a tag P passada no arquivo app.js*/}
      {children}
      <p>O valor é: {myValue}</p>
    </>
  );
};

export default Container;
