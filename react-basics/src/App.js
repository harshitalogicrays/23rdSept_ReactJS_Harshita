import { Outlet } from 'react-router-dom';
import './App.css'
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Addition from './components/functional/Addition';
import Counter from './components/functional/Counter';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Form1 from './components/functional/Form1';
import Propsdemoinfun from './components/functional/Propsdemoinfun';
import Statedemo from './components/functional/Statedemo';
import Header from './components/Header';
import cssmodule from './App.module.css'

//root component
function App() {
  return (
    <>
     <Header/>
    <div className="container-fluid mt-5">
      {/* <p className={cssmodule.msgerror}>module error class</p> */}
      <Outlet/>
      
      {/* <h1 className='text-primary'>Hello React</h1> */}
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

        {/* <Form1/> */}
    </div>
    </>
  );
}

export default App;
