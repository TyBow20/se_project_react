import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather__info">75°F</div>
          <img src="/images/cloudy.svg" />
        </section>
        <section id="card-section">card</section>
      </main>
    </div>
  );
}

export default App;
