import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './styles.scss'
import Home from '../components/home'
import Loader from '../components/loader'
import Message from '../components/message'
import {connect} from 'react-redux'
import {allcharacters} from '../store/action'

const mapStateToProps = (state) =>{
    return{
        characters: state.charatersReducer.characters
    }
}

const Index = ({characters, allcharacters}) =>{
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    useEffect(async () => {
        setLoader(true)
        await axios.get('http://localhost:5000/characters')
        .then(function(response){
          allcharacters(response.data)
          setLoader(false)
          setError(false)
        })
        .catch(function(err){
            setError(true)
            setLoader(false)
        })
    },[])
    return (
        <div className="BodyApp">
            {loader&&<Loader/>}
            {error&&<Message msg={`Encontramos un error dentro de nuestras conexiones, intentalo más tarde`}/>}
            {characters&&<Home/>}
            <div className="coverApp"></div>
        </div>
    )
}

export default connect (mapStateToProps,{allcharacters})(Index)