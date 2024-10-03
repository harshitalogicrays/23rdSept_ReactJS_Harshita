import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Addition from './components/functional/Addition';
import Counter from './components/functional/Counter';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Form1 from './components/functional/Form1';
import Propsdemoinfun from './components/functional/Propsdemoinfun';
import Statedemo from './components/functional/Statedemo';

//root component
function App() {
  return (
    <div className="container mt-5">
      <h1 className='text-primary'>Hello React</h1>
      {/* <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp>
      <hr/>
      <Firstclasscomp/> */}

      {/* <Propsdemoinfun username="Jimit" address="Ahmedabad" mobile={999999} isActive={true}>
        <h2>hello h2</h2>
        <p>hello p</p>
        <Firstfuncomp/>
      </Propsdemoinfun> */}

      {/* <Statedemo/> */}
        {/* <Counter/> */}
        {/* <Addition/> */}

        <Form1/>
    </div>
  );
}

export default App;
