import Main from './pages/Main';
import Price from './pages/Price';
import Currencies from './pages/Currencies';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
<Routes>
  <Route path='/' element={<Main />} />
  <Route path='/currencies' element={<Currencies />}/>
  <Route path='/price' element={<Price />} />
</Routes>

  
    </div>
  );
}

export default App;
