import{ useState, useEffect } from 'react'
import Navigation from "./components/Navigation";
import Tommy from "./components/Tommy";
import { Routes, Route } from "react-router-dom"
import BigDrop from "./components/BigDrop";
import Cuker from "./components/Cuker";


const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      }, 700);
  },[])
  return (
		<>
      { isLoading && <div className="div-loading">Loading...</div>}
      { !isLoading && <div className='app'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Tommy />}></Route>
          <Route path='BigDrop' element={<BigDrop />}></Route>
          <Route path='Cuker' element={<Cuker />}></Route>
        </Routes>
      </div>}
		</>
	);
}

export default App;
