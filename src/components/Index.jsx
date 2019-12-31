import React, {useState} from 'react'
import Game from './Game'
let localStorage = window.localStorage


const Index = () => {
  const [play, setPlay] = useState(false)
  return (
    <div>
      {play? 
        <Game/>:
        <>
      <div>
        Luigi: W, S, D, A: move; Space: Attack 
        Mario: UP, DOWN, LEFT, RIGHT: move; Space: Attack
      </div>
        <button onClick={() => setPlay(true)}>PLAY</button> 
        </>
      }
    </div>
  )
}

export default Index