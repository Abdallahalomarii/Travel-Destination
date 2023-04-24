import db from './data/db.json';
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home data={db} />}></Route>
      <Route path="/city/:id" element={<TourDetails data={db} />}></Route>
    </Routes>
  )
}
export default App;