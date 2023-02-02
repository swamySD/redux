import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import getPostsData  from '../actions/postActions'
import addPostsData from '../actions/addProduct';
import './Home.css'
const Home = () => {
    const dispatch=useDispatch()
    const postss=useSelector(state=>state.posts)
     
const get=()=>{
  dispatch(getPostsData())
}
const add=()=>{
  dispatch(addPostsData())
}
  return (
    <div className='ccc'>
<h1>hi</h1>
  <button onClick={get}>hello</button>
  <button onClick={add}>hello</button>
      <div className='input-container'>
        <img src="https://media.istockphoto.com/id/1340716614/photo/abstract-icon-representing-the-ecological-call-to-recycle-and-reuse-in-the-form-of-a-pond.jpg?s=612x612&w=is&k=20&c=jJ0Ee8AN38VW_JdcHLQ83La2fjKc-oNnF7TYGxbDlxk=" style={{width: '50%',zIndex:'6'}} />
     
      </div>
    </div>
  )
}

export default Home

/*
<ul>
{postss&&postss.map((each)=><li key={each.id}>
{each.title}
</li>)}
</ul>
useEffect(()=>{
dispatch(getPostsData())
 },[dispatch])

*/