import { useState, useEffect } from 'react'
import { atomInfo } from '../store/atoms/info'

import './App.css'

function App() {
  const [info, setInfo] = useState("")
  const [change, setChange] = useState(0);
  const [input, setInput] = useState('')
  // console.log(info)

  useEffect( ()=>{
    fetch(`https://api.github.com/users/${input}`)
    .then( async(response) => {
      const  data = await response.json();
      console.log(data)
      setInfo(data)
    })
  },[change])

  return (
    <div className='container'>
      <div id='image'>
        <img src={info.avatar_url} alt=""/>
      </div>
      <div className='login'>{info.login}</div>
      <div id='info'>
        <span>
          <div>{info.followers}</div>
          <div className='details'>followers</div>
        </span>
        <span>
          <div>{info.following}</div>
          <div className='details'>following</div>
        </span>
        <span>
          <div>{info.public_repos}</div>
          <div className='details'>public repos</div>
        </span>
      </div>

      <InputGit setInput={setInput} setChange={setChange}></InputGit>

      
    </div>
  )
}
function InputGit({setInput,setChange}){
  

  return <div>
    <input type="text" onChange={(e)=>{
      setInput(e.target.value);
    }}/>
    <button onClick={()=>{
      setChange( prev => prev+1);
    }}>search</button>
  </div>
    
}

export default App
