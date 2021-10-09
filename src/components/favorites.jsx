import React from 'react'
import './favorites.scss'
import { connect } from 'react-redux'
import Trash from './trash'
import {deletefav} from '../store/action'
const mapStateToProps = (state) => {
    return {
        characters: state.charatersReducer.characters
    }
}

const Favoritos = ({characters,deletefav})=> {

    return (
        <div className="containerFavorites">
            {   characters.filter(filtro=> filtro.favorite ===true ).length>0
                ?characters.filter(filtro=> filtro.favorite ===true ).slice(0,5).map((charater)=>{
                    return(
                        <div className="itemFavorites" key={charater.name}>
                            <div className="containerIem">
                                <div className="imagenFavorites" style={{backgroundImage:`URL(${charater.image})`}}></div>
                                <div className="nameFavorites">{charater.name}</div>
                                <div onClick={()=>deletefav(characters.findIndex( Findcharacter => Findcharacter.name===charater.name))} className="trashFavorites"><Trash/></div>
                            </div>
                        </div>
                    )
                })
                :<div className="sinFavorites"><span>Aún no tienes favoritos</span></div>
            }
        </div>
    )
}

export default connect(mapStateToProps, {deletefav})(Favoritos)