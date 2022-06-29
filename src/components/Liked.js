import "../App.css";

function Liked() {
  const renderMovies = () => {};

  return (
    <div className="App">
      <header className="center-max-size header">
        <span className={"brand"}>Liked Movies</span>
      </header>
      <div className={"center-max-size container"}>{renderMovies()}</div>
    </div>
  );
}

export default Liked;
