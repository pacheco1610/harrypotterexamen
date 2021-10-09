import React,{useState} from 'react'
import './modal.scss'
import Close from './close'
import axios from 'axios'
import {connect} from 'react-redux'
import {addcharacter} from '../store/action'
const  Modal =({setActiveModal,addcharacter}) =>{
    const [imagen, setImagen] = useState(null)

    const handleImage = (e) =>{
        setImagen(e.target.files[0])
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const perfile = new Object();
        const newCharacter = new FormData(e.target)
        if (newCharacter.get('posicion')==='studen') {
            perfile.hogwartsStudent = true
            perfile.hogwartsStaff = false
        }else{
            perfile.hogwartsStudent = false
            perfile.hogwartsStaff = true
        }
        const response = await axios.post('http://localhost:5000/characters',{
            name:newCharacter.get('name'),
            dateOfBirth:newCharacter.get('dateOfBirth'),
            eyeColour:newCharacter.get('eyeColour'),
            hairColour: newCharacter.get('hairColour'),
            gender: newCharacter.get('gender'),
            ...perfile

        })
        addcharacter(response.data)
    }
    return (
        <form className="modal" onSubmit={(e)=>handleSubmit(e)}>
            <div className="containerModal">
                <div className="headerModal">
                    <div className="title"><span>Agregar un personaje</span></div>
                    <div className="closeModal"  onClick={()=>setActiveModal(false)}><Close /></div>
                </div>
                <div className="inputsModal">
                    <div className="containerInput">
                        <label className="labelGeneral" htmlFor="nombre">NOMBRE</label>
                        <input id="nombre" name="name" required className="inputGeneral" type="text" />
                    </div>
                    <div className="containerInput">
                        <label className="labelGeneral" htmlFor="cumpleanos">CUMPLEAÑOS</label>
                        <input id="cumpleanos" name="dateOfBirth" required className="inputGeneral" type="text" />
                    </div>
                </div>
                <div className="inputsModal">
                    <div className="containerInput">
                        <label className="labelGeneral" htmlFor="colordeojos">COLOR DE OJOS</label>
                        <input id="colordeojos" name="eyeColour" className="inputGeneral" type="text" />
                    </div>
                    <div className="containerInput">
                        <label className="labelGeneral" htmlFor="cumpleanos">COLOR DE PELO</label>
                        <input id="cumpleanos" name="hairColour" required className="inputGeneral" type="text" />
                    </div>
                </div>
                <div className="inputsModal">
                    <div className="containerInputCheck">
                        <label className="labelGeneral">GÉNERO</label>
                        <div className="inputCheck">
                            <div>
                                <input type="radio" name="gender" value="female" required id="checkboxGenero" />
                                <label htmlFor="checkboxGenero">Mujer</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" value="male" id="checkboxGeneroHombre" />
                                <label htmlFor="checkboxGeneroHombre">Hombre</label>
                            </div>
                        </div>
                    </div>
                    <div className="containerInputCheck">
                        <label className="labelGeneral">POSICIÓN</label>
                        <div className="inputCheck">
                            <div>
                                <input type="radio" name="posicion" value="studen" required id="checkboxGenero" />
                                <label htmlFor="checkboxGenero">Estudiante</label>
                            </div>
                            <div>
                                <input type="radio" name="posicion" value="staff" id="checkboxGenero" />
                                <label htmlFor="checkboxGenero">Staff</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inputsModal">
                    
                    <input className="inputFile" className="labelinputFile" required id="inputFile" accept=".png, .jpg, .jpeg" onChange={(e)=>handleImage(e)} type="file" />
                </div>
                <div className="footer">
                    <button type="submit"  className="btnGeneral">Guardar</button>
                </div>
            </div>
        </form>
    )
}

export default connect (null,{addcharacter})(Modal)