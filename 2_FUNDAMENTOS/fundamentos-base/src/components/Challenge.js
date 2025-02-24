const Challenge = (x, y) => {
  x = 25;
  y = 10;
  return (
    <div>
      <p>A: {x}</p>
      <p>B: {y}</p>

      <button onClick={() => console.log(x + y)}>Somar</button>
    </div>
  );
};

export default Challenge;
