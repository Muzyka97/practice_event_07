import './styles/main.css';

import {Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';



function App() {
  return (
    <div className="App">
        
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/projects/:id' element={<ProjectPage/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        <Footer/>
    </div>
  );
};

export default App;
