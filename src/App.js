import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home'
import {SearchSummoner} from './pages/SearchSummoner';
import {SearchChampionId} from './pages/SearchChampionId';
import {ServerStatus} from './pages/ServerStatus';
import {ChampionRandomizer} from './pages/ChampionRandomizer';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/randomizer' element={<ChampionRandomizer/>}/>
        <Route path='/summoners' element={<SearchSummoner/>}/>
        <Route path='/championsById' element={<SearchChampionId/>}/>
        <Route path='/apiStatus' element={<ServerStatus/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
