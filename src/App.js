import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <div>
          <footer>
            This project was coded by{" "}
            <a
              href="https://portfolioirynaagafonov.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iryna Agafonov
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/iryna-ag/dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://dictionaryappreactapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>{" "}
      </div>
    </div>
  );
}
