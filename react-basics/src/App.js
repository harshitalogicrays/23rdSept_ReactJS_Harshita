import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Propsdemoinfun from './components/functional/Propsdemoinfun';

//root component
function App() {
  return (
    <div className="container mt-5">
      <h1 className='text-primary'>Hello React</h1>
      {/* <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp>
      <hr/>
      <Firstclasscomp/> */}

      <Propsdemoinfun username="Jimit" address="Ahmedabad" mobile={999999} isActive={true}>
        <h2>hello h2</h2>
        <p>hello p</p>
        <Firstfuncomp/>
      </Propsdemoinfun>

    </div>
  );
}

export default App;
