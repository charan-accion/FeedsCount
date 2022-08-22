import './App.css';
import ChartData from './LineChart';
import Dashboard from './Dashboard';
import CreateFeed from './CreateFeed';
function App() {
  return (
    <div className="App">
      <Dashboard />
      <ChartData />
      <CreateFeed />
    </div>
  );
}
export default App;