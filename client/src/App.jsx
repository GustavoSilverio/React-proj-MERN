import './App.css';
import Tgirias from './components/Tables/Girias/T-girias';
import TnomesProp from './components/Tables/NomesProp/T-nomesProp';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="tables">
        <Tgirias />
        <TnomesProp />
      </div>
      <Footer />
    </>
  )
}

export default App;