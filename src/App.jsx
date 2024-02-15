
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <header>   
        <Header/>
      </header>
    <section>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </section>

    <footer>
    <Footer/>
    </footer>
    </div>
  );
}

export default App;
