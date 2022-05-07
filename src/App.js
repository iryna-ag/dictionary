import book from "./book.avif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={book} className="App-book img-fluid" alt="book" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Iryna Agafonov</small>
        </footer>
      </div>
    </div>
  );
}
