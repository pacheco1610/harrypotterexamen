import React, { useState,useEffect } from 'react'
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
    const [activeModal, setActiveModal] = useState(false)
    return (
        <div className="containerApp">
            <Navbar setActiveModal={setActiveModal} />
            <Hero  />
            <div className="containerCards">
                {characters.map((character,index) => {
                    return (
                        <Card key={character.name} position={character.hogwartsStudent==true?'studen':'staff'} index={index} />
                    )
                })
                }
            </div>
            {activeModal&&<Modal setActiveModal={setActiveModal}/>}
        </div>
    )
}

export default connect(mapStateToProps, null)(Home)
