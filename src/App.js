import './App.css';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartData from './component/LineChart';
import Navbar from './component/Dashboard';
import CreateFeed from './component/CreateFeed';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <>
      <Navbar />
      <div className="container1">
        <Routes>
          <Route path="/" element={<ChartData />} />
          <Route path="/CreateFeed" element={<CreateFeed />} />
         
        </Routes>
      </div>
    </>
  );
}
export default App;