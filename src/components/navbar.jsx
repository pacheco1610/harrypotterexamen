import React,{useState} from 'react'
import './navbarStyles.scss'
import fav from '../assets/fav.svg';
import User from './user'
import Favorites from './favorites'

export default function Navbar({setActiveModal}) {
    const [activeFavorites, setActiveFavorites] = useState(false)
    return (
        <div className="navbar">
            <div className="justified">
                <div className="containerButtonNavbar">
                    <button className="btnNavbar left" onClick={()=>setActiveFavorites(!activeFavorites)}>Favoritos <img className="fav" src={fav} alt="" /></button>
                    <button className="btnNavbar right" onClick={()=>setActiveModal(true)}>Agregar <User /></button>
                    {activeFavorites&&<Favorites/>}
                </div>
            </div>
        </div>
    )
}
