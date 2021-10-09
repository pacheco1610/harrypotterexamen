import React, { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'
import { connect } from 'react-redux'
import Modal from '../components/modal'
const mapStateToProps = (state) => {
    return {
        characters: state.charatersReducer.characters
    }
}


const Home = ({ characters }) => {
    const [characterFilter, setCharacterFilter] = useState(characters)
    const [activeModal, setActiveModal] = useState(false)
    const filterCharacters = (e,filter) => {
        if (filter == 'STUDEN') {
            setCharacterFilter(characters.filter(character => character.hogwartsStudent == true))
        }
        else{
            setCharacterFilter(characters.filter(character => character.hogwartsStaff == true))
        }

    }

    return (
        <div className="containerApp">
            <Navbar setActiveModal={setActiveModal} />
            <Hero filterCharacters={filterCharacters} />
            <div className="containerCards">
                {characterFilter.map((character,index) => {
                    return (
                        <Card key={character.name} character={character} index={index} />
                    )
                })}
            </div>
            {activeModal&&<Modal setActiveModal={setActiveModal}/>}
        </div>
    )
}

export default connect(mapStateToProps, null)(Home)
