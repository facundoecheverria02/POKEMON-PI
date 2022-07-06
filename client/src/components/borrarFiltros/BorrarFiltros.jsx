import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteFilters} from "../../redux/actions/actions.js";


export class BorrarFiltros extends Component{

    

    render(){

        const borrarFiltros = (e)=>{
            
            this.props.deleteFilters();
            
           
        }
        return(
            <div>
                <button type="button" onClick={(e) =>borrarFiltros(e)}>Borrar Filtros</button>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) =>{
    return{
        deleteFilters: () => {
            dispatch(deleteFilters())
        }
    }
};

export default connect(null, mapDispatchToProps)(BorrarFiltros)


