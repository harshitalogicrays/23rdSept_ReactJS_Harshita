import { Outlet } from "react-router-dom"
import FNavbar from "./features/fNavbar"
import ProductPage from "./features/ProductPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
  <>
  <ToastContainer position="bottom-left" autoClose={2000}
hideProgressBar={false} newestOnTop={false} closeOnClick
rtl={false} pauseOnFocusLoss={false}
draggable pauseOnHover={false} theme="colored"
/>
  <FNavbar/>
  <Outlet/>

  {/* <ProductPage/> */}
    {/* <h1 className="text-3xl font-bold underline text-red-500
     md:text-purple-900 md:bg-slate-400">
      Hello world!
    </h1>
    <h2 className="border-2 border-red-800 border-solid inline-block w-36 h-20 rounded">heading</h2>

    <button type="button" className="border-2 border-red-800 border-solid p-4 font-bold shadow shadow-black hover:bg-gray-700 hover:text-yellow-300 hover:text-3xl">Click Me</button>
    
    <br/>

    <input className="border-4 border-black border-solid w-96 focus:bg-slate-300 focus:outline-double focus:outline-2 focus:outline-red-800"/> */}

  </>
  )
}

export default App
