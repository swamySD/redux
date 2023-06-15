export const getPostsData=()=>{
    return async(dispatch)=>{
    dispatch({type:'PENDING'})
    
    await fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(jsonData=>{
                    dispatch({type:'SUCCESS',payload:jsonData})
                }).catch(error=>{
                    dispatch({type:'FAILURE',payload:error})
            })
        }
    
}
//store.dispatch(getPostsData)

export default  getPostsData; 

