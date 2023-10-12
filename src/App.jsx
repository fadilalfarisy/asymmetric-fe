import './App.css';
import Decode from './components/Decode';
import Generate from './components/Generate';
import Encrypt from './components/Encrypt';

function App() {
  return (
    <>
      <Generate />
      <div className="centered" style={{ justifyContent: "space-around" }}>
        <Encrypt />
        <Decode />
      </div>
    </>
  );
}

export default App;
