const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, ninjas");
    console.log(e);
  };
  const handleClickAgain = (name, e) => {
    console.log(`Hello again, ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("dude", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
