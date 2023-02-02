import axios from 'axios';
export const addPostsData=()=>{
    return (dispatch)=>{ dispatch({type:'LOADING'})
    // https://redux-384e0-default-rtdb.firebaseio.com/cart.json
     axios.post('https://fakestoreapi.com/products',{
        method:"POST",
       
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        ) 
     })
                 .then(res=>res.data)
                 .then(jsonData=>{
                     dispatch({type:'LOADED',payload:jsonData})
                 }).catch(error=>{
                     dispatch({type:'ERROR',payload:error})
             })
     
     }
 }
     
     
     
 //store.dispatch(getPostsData)
 
 export default  addPostsData; 