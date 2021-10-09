import map from 'lodash/map'

import store from '../store/index'
import {allcharacters} from '../store/action'


const expect = global.expect;

describe('STORE',()=>{
    it('Verificamos que el store contiene las propiedades esperadas',()=>{
        const propiedades = map(store.getState(),(value,key)=>key);
        const actual = propiedades;
        const esperar = ['charatersReducer']
        expect(actual).toEqual(esperar)
    })
    it('Verificamos que el dispatch actualiza el estado de la aplicacion',()=>{
        store.dispatch(allcharacters([1,2,3,4]))
        const actual = store.getState().charatersReducer
        const esperado = { characters: [1,2,3,4]}
        expect(actual).toEqual(esperado)
    })
})