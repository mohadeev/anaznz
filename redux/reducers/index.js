import * as t  from '../types/index'


export const main = ( state = false, action) => {
    switch(action.type){
        case "SHOW_THE_TOUR":
            return !state  
       default :
       return state;    
    }
}