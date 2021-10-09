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


const Card=({index,position,addfav,characters,deletefav})=> {
    const Favorito = (e,index) =>{
        if (characters[index].favorite===true) {
            deletefav(index)    
        }else{
            addfav(index)
        }
    }
    return (
        <div className={`card ${position}`}>
            <div className={`imagenCard ${characters[index].house===""?"NotHouse":characters[index].house}`}>
                <div className="circleImagenCard" style={{backgroundImage:`URL(${characters[index].image})`}}>
                </div>
            </div>
            <div className="infoCard">
                <div className="containerInfoCard">
                    <div className="headerCard"><span>{characters[index].alive===true ? 'VIVO' : 'MUERTO'} / {characters[index].hogwartsStudent===true ? 'ESTUDIANTE' : 'SATFF'}</span> 
                    <div className="fav" onClick={(e)=>Favorito(e,index)}><Fav fav={characters[index].favorite}/></div></div>
                    <div className="nameCard">{characters[index].name}</div>
                    <div className="bodyCard">
                        <div><span>Cumpleaños:</span> {characters[index].dateOfBirth===""?"No tenemos esa información":characters[index].dateOfBirth}</div>
                        <div><span>Género:</span> {characters[index].gender===""?"No tenemos esa información":characters[index].gender}</div>
                        <div><span>Color de ojos:</span> {characters[index].eyeColour===""?"No tenemos esa información":characters[index].eyeColour}</div>
                        <div><span>Color de pelo:</span>{characters[index].hairColour===""?"No tenemos esa información":characters[index].hairColour}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect (mapStateToProps,{addfav,deletefav})(Card)