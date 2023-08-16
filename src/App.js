import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetails />}></Route>
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
