export const getPostsData=()=>{
    return (dispatch)=>{
    dispatch({type:'PENDING'})
    
    fetch('https://fakestoreapi.com/products')
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

