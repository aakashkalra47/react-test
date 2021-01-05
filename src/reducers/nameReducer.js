export const nameReducer=(state={},action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            return {name:action.data};
        default:
            return {};
    }
}