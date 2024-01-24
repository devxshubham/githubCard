import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [info, setInfo] = useState()
  // console.log(info)

  useEffect( ()=>{
    fetch('https://api.github.com/users/devxshubham')
    .then( async(response) => {
      const  data = await response.json();
      console.log(data)
      setInfo(data)
    })
  },[])

  return (
    <div className='container'>
      { info ? (
          <>
            <div id='image'>
              <img src="https://avatars.githubusercontent.com/u/122411505?v=4" alt=""/>
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
                  
          </>
      ) :
      (
        <>
          <div>...loading</div>
        </>
      )}
    </div>
  )
}

export default App
