import "./App.css";
import Tags from "./Tags";

function App() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <Tags  tags={['boomdotdev', 'taskdsdff', 'tags', 'react', 'slabo', 'vinkso', 'i', 'svinsko']}/>
    </div>
  );
}

export default App;
