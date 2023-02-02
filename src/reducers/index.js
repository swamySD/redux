const initialState={
    loading:'false',
    loaded:'false',
   posts:[],
   error:null,
   count:0
}


const counterReducer=(state={initialState},action)=>{
    switch(action.type){
       case 'PENDING':{
                return{...state,loading:true}
                
       } 
          case 'SUCCESS':{
            return{
                ...state,loaded:true,loading:false,posts:action.payload
            }
            
          } 
         case 'FAILURE':{
            return{...state,loading:'false',error:action.payload}
            
         } 

    }
    return state
}

export default counterReducer