import {GET_POKEMONS, GET_TYPES, FILTER_DB_API, FILTER_TYPE, GET_DETAIL, FIND_POKEMON, ORDER_ATTACK, ORDER_AZ, DELETE_FILTERS, CREATE_POKEMON, DELETE_POKEMON, LOADING} from "../types/types.js";


const initialState = {
    pokemons: [],
    filterType:"",
    filterDbApi:"",
    ordererAttack:"",
    ordererAz: "",
    types: [],
    detail: [],
    loading: false
};

function reducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload

            }
        case FILTER_TYPE:

                return{
                ...state,
                filterType: action.payload
            }
        
            case FILTER_DB_API:

                return{
                    ...state,
                    filterDbApi: action.payload
                }
            
            case FIND_POKEMON:

            return{
                ...state,
                pokemons: action.payload
            }

            case GET_DETAIL:
           
            return{
                ...state,
                detail: action.payload
            }

            case ORDER_AZ:

                return{
                    ...state,
                   ordererAz: action.payload
                }
        
            case ORDER_ATTACK:
           
                return{
                    ...state,
                   ordererAttack: action.payload
                }
            case DELETE_FILTERS:
                return{
                    ...state,
                    filterType:"",
                    filterDbApi:"",
                    ordererAttack:"",
                    ordererAz: "",
                }
            case CREATE_POKEMON:
                return{
                    ...state
                }
            case DELETE_POKEMON:
                return{
                    ...state,
                    pokemons:state.pokemons.filter(p => p.id !== action.payload)
                }
            case LOADING:
                return{
                    ...state,
                    loading: action.payload
                }


        default:
            return state
    }
}


export default reducer;