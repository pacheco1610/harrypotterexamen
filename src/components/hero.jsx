import React from 'react'
import './heroStyles.scss'
import logo from '../assets/HarryPotter.svg';
import card from './card';
export default function Hero() {
    const filtrado = (e, filtro) => {
        const cards = document.getElementsByClassName('card')
        const buttons = document.getElementsByClassName('btnGeneral')
        for (let index = 0; index < cards.length; index++) {
            if (cards[index].classList.contains(filtro)) {
                cards[index].classList.remove('hide');
            } else {
                cards[index].classList.toggle('hide');
            }
        }
       if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
       }else{
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].classList.remove('active');
        }
        e.target.classList.toggle('active')
       }
    }
    return (
        <div className="hero">
            <div className="logoHero">
                <img src={logo} alt="Logo de Harry Potter en color blanco" />
            </div>
            <div className="title">
                <span>Selecciona tu filtro</span>
            </div>
            <div className="continerButtonsHero">
                <button onClick={(e) => filtrado(e, 'studen')} className="btnGeneral">
                    ESTUDIANTES
                </button>
                <button onClick={(e) => filtrado(e, 'staff')} className="btnGeneral">
                    STAFF
                </button>
            </div>
        </div>
    )
}
