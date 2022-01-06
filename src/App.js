import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Rutas/Home';
import Layout from './Layout';
import { makeStyles } from '@material-ui/core';
import P2p from './Rutas/P2p';
import Futuros from './Rutas/Futuros';
import Manifiesto from './Rutas/Manifiesto';
import Spot from './Rutas/Spot';
import BTCUSDT from './Rutas/Spot/BTCUSDT';
import ETHUSDT from './Rutas/Spot/ETHUSDT';
import LTCUSDT from './Rutas/Spot/LTCUSDT';
import XRPUSDT from './Rutas/Spot/XRPUSDT';
import XLMUSDT from './Rutas/Spot/XLMUSDT';
import Coinpage from './Rutas/coins/Coinpage'

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh',

    },
  }));

  const classes = useStyles()
  return (
    <div class={classes.App}>
<BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
          <Route path="/Futuros" element={<Futuros/>} />
          <Route path="/Spot" element={<Spot/>} />
          <Route path="/Manifiesto" element={<Manifiesto/>} />
          <Route path="/p2p" element={<P2p/>} />
          <Route path="/Spot/BTCUSDT" element={<BTCUSDT/>} />
          <Route path="/Spot/ETHUSDT" element={<ETHUSDT/>} />
          <Route path="/Spot/LTCUSDT" element={<LTCUSDT/>} />
          <Route path="/Spot/XRPUSDT" element={<XRPUSDT/>} />
          <Route path="/Spot/XLMUSDT" element={<XLMUSDT/>} />
          <Route path="/Futuros/BTCUSDT" element={<BTCUSDT/>} />
          <Route path="/Futuros/ETHUSDT" element={<ETHUSDT/>} />
          <Route path="/Futuros/LTCUSDT" element={<LTCUSDT/>} />
          <Route path="/Futuros/XRPUSDT" element={<XRPUSDT/>} />
          <Route path="/Futuros/XLMUSDT" element={<XLMUSDT/>} />
          <Route path="/Rutas/coins/:id" element={<Coinpage/>} />
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Route>      
    </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;
