const TemplateExpressions = () => {
  const name = "Matheus";

  const data = {
    name: "Battist",
    age: 31,
    job: "Programmmer",
  };
  return (
    <div>
      <h1>
        Hello {data.name}, tudo bem? Você tem {data.age} e trabalha com{" "}
        {data.job}
      </h1>

      <p>{4 + 10}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
