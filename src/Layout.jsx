import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import {  createTheme, MenuItem, Select, ThemeProvider } from '@material-ui/core'
import morlako from "./imagenes/MORLACO01.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { TickerTape } from "react-ts-tradingview-widgets";



const Layout = () => {
        const darktheme = createTheme ({
        palette:{
            primary:{
            main:"#fff",
        },
        type:"dark",
        }
    });
    //Configuracion de DropDown Spot
    const [dropdown, setDropdown]= useState(false);
    const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown); 
  }
  //Configuracion de DropDown Futuros 
    const [dropdown2, setDropdown2]= useState(false);
    const abrirCerrarDropdown2=()=>{
    setDropdown2(!dropdown2);   
  } 
    return (
        
        <ThemeProvider theme={darktheme}>
<main>

<div className="header">
<div ><Link to="/" ><img src='https://cdn.glitch.global/24169484-5aa3-4f4f-a815-e9f61cf2fcfc/MORLACO01.png?v=1641493290693' alt='morlako' className='logo' /></Link></div>
			
            <Link to="/" class='botones'>Mercados</Link>
            <Link to="/p2p" class='botones'>Persona a Persona (P2P)</Link>
            
         <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} >
       <DropdownToggle caret color='link'>
       Trading(Contado)
       </DropdownToggle>

       <DropdownMenu>
         <DropdownItem header>Pares Comerciales</DropdownItem>
         <DropdownItem divider/>
         <DropdownItem onClick={<Link to="/Rutas/Spot/BTCUSDT" class='botones'/>}><Link to="/Spot/BTCUSDT" class='botones_internos'>BTC/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Spot/BTCUSDT" class='botones'/>}><Link to="/Spot/ETHUSDT" class='botones_internos'>ETH/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Spot/BTCUSDT" class='botones'/>}><Link to="/Spot/LTCUSDT" class='botones_internos'>LTC/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Spot/BTCUSDT" class='botones'/>}><Link to="/Spot/XRPUSDT" class='botones_internos'>XRP/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Spot/BTCUSDT" class='botones'/>}><Link to="/Spot/XLMUSDT" class='botones_internos'>XLM/USDT</Link> </DropdownItem>
       </DropdownMenu>
    
     </Dropdown>
     
    
    
         <Dropdown isOpen={dropdown2} toggle={abrirCerrarDropdown2} >
       <DropdownToggle caret color='link'>
       Trading(Futuros)
       </DropdownToggle>

       <DropdownMenu>
         <DropdownItem header>Pares Comerciales</DropdownItem>
         <DropdownItem divider/>
         <DropdownItem onClick={<Link to="/Rutas/Futuros/BTCUSDT" class='botones'/>}><Link to="/Futuros/BTCUSDT" class='botones_internos'>BTC/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Futuros/BTCUSDT" class='botones'/>}><Link to="/Futuros/ETHUSDT" class='botones_internos'>ETH/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Futuros/BTCUSDT" class='botones'/>}><Link to="/Futuros/LTCUSDT" class='botones_internos'>LTC/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Futuros/BTCUSDT" class='botones'/>}><Link to="/Futuros/XRPUSDT" class='botones_internos'>XRP/USDT</Link> </DropdownItem>
         <DropdownItem onClick={<Link to="/Rutas/Futuros/BTCUSDT" class='botones'/>}><Link to="/Futuros/XLMUSDT" class='botones_internos'>XLM/USDT</Link> </DropdownItem>
       </DropdownMenu>
    
     </Dropdown>              
   

			<div className="right_header header">
				<button className="grey_button blue_button">Inicio</button>
				    <button className="blue_button ">Registro</button>
                            <div >
                            <Link to="/Manifiesto" class='botones'>Manifiesto</Link> 
                            <Link to="/users" class='botones'>Español(Latino)</Link>
                            </div>
                            
            <Select variant='outlined'                     //Boton de Dolar y Euros
                                style={{  
                                    color:'#fff',                  
                                    width:100,
                                    height:40,
                                    marginLeft: 15,
                                }}>
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'EUR'}>EUR</MenuItem>
            </Select>
			</div>
		</div>
      <div>
      <TickerTape colorTheme="dark"></TickerTape>
      </div>  
        
           
        <section>
            <Outlet />
        </section>
    </main>
        </ThemeProvider>
        
    )
}

export default Layout
