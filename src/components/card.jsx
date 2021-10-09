import React from 'react'
import './cardStyles.scss'
import {connect} from 'react-redux'
import {addfav,deletefav} from '../store/action'
import Fav from './fav'

const mapStateToProps = (state) => {
    return {
        characters: state.charatersReducer.characters
    }
}


const Card=({index,character,addfav,characters,deletefav})=> {
    const Favorito = (e,index) =>{
        if (characters[index].favorite===true) {
            deletefav(index)
        }else{
            addfav(index)
        }
        e.target.classList.toggle('activeFav')
    }
    return (
        <div className="card">
            <div className={`imagenCard ${character.house===""?"NotHouse":character.house}`}>
                <div className="circleImagenCard" style={{backgroundImage:`URL(${character.image})`}}>
                </div>
            </div>
            <div className="infoCard">
                <div className="containerInfoCard">
                    <div className="headerCard"><span>{character.alive===true ? 'VIVO' : 'MUERTO'} / {character.hogwartsStudent===true ? 'ESTUDIANTE' : 'SATFF'}</span> 
                    <div className="fav" onClick={(e)=>Favorito(e,index)}><Fav/></div></div>
                    <div className="nameCard">{character.name}</div>
                    <div className="bodyCard">
                        <div><span>Cumpleaños:</span> {character.dateOfBirth===""?"No tenemos esa información":character.dateOfBirth}</div>
                        <div><span>Género:</span> {character.gender===""?"No tenemos esa información":character.gender}</div>
                        <div><span>Color de ojos:</span> {character.eyeColour===""?"No tenemos esa información":character.eyeColour}</div>
                        <div><span>Color de pelo:</span>{character.hairColour===""?"No tenemos esa información":character.hairColour}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect (mapStateToProps,{addfav,deletefav})(Card)