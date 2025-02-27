const UserDetails = ({ name, age, job }) => {
  return (
    <>
      <hr />
      <h2>
        Nome: <strong>{name}</strong>
      </h2>
      <p>
        Idade: <strong>{age}</strong>
      </p>
      <p>
        Profissão: <strong>{job}</strong>
      </p>
      {age >= 18
        ? (<p>Pode tirar Habilitação? <strong>Maior De Idade, Pode Tirar Habilitação</strong></p>)
        : (<p>Pode tirar Habilitação? <strong>Menor De Idade, Não Pode Tirar habilitação</strong></p>)}
      <hr />
    </>
  );
};

export default UserDetails;
