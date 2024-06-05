import { useState,useEffect } from 'react'
import './App.css'
import useMemory from './hooks/useMemory'
import Card from './components/Card'


function App() {
 const {board,imageComponents,shuffleCards,handleClick} = useMemory()
  useEffect(() => {
     shuffleCards()
  }, [])
  return (
    <>
      <h1>Memory Game</h1>
      <div className="board">
      {board.map((b,index)=>{
         return <Card key={index} isOpened={b.isOpened} openImage={() => handleClick(index)} image={imageComponents[b.imageIndex]()}/>
      })}
      </div>
    </>
  )
}

export default App
