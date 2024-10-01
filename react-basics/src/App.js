import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Firstfuncomp from './components/functional/Firstfuncomp';

//root component
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp>
    </div>
  );
}

export default App;
