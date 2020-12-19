import logo from './logo.svg';
import './App.css';
import './tailwind.generated.css'
import { NamePlate } from './Components/NamePlate';
import { Education } from './Components/Education';
import { Work } from './Components/Work';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div className="App">
      <NamePlate />
      <div className="md:flex shadow-lg">
        <Education />
        <Work />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
