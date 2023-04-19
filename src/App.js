import db from './data/db.json';
import Home from "./components/home/Home";
function App()
{
  return(
    <Home data={db}/>
  )
}
export default App;