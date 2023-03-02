// import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar';



function App() {
  return (
    <BrowserRouter className="App">
           <Navbar />
    </BrowserRouter>
  );
}

export default App;
