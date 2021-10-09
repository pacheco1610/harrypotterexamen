import React from 'react'
import './heroStyles.scss'
import logo from '../assets/HarryPotter.svg';
export default function Hero({filterCharacters}) {
    return (
        <div className="hero">
            <div className="logoHero">
                <img src={logo} alt="Logo de Harry Potter en color blanco"/>
            </div>
            <div className="title">
                <span>Selecciona tu filtro</span>
            </div>
            <div className="continerButtonsHero">
                <div onClick={(e)=>filterCharacters(e,'STUDEN')} id="STUDEN"  className="btnGeneral">
                    <span>ESTUDIANTES</span>
                </div>
                <div onClick={(e)=>filterCharacters(e,'STAFF')} id="STAFF" className="btnGeneral">
                    <span>STAFF</span>
                </div>
            </div>
        </div>
    )
}
