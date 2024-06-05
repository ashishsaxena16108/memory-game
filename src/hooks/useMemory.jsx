import React,{ useState,useEffect } from 'react'

import Burger from '../assets/burger.png'
import Cake from '../assets/cake.png'
import Chocobar from '../assets/chocobar.png'
import Fries from '../assets/fries.png'
import Icecream from '../assets/ice-cream.png'
import Pizza from '../assets/pizza.png'
import Popsicle from '../assets/popsicle.png'
import Ramen from '../assets/ramen.png'

const burger = () => <img src={Burger} />
const chocobar = () => <img src={Chocobar} />
const iceCream = () => <img src={Icecream} />
const popsicle = () => <img src={Popsicle} />
const pizza = () => <img src={Pizza} />
const fries = () => <img src={Fries} />
const ramen = () => <img src={Ramen} />
const cake = () => <img src={Cake} />

const getRandomNumber = (excludedList) => {
  const availableNumbers = [...Array(16).keys()].filter(
    (number) => !excludedList.includes(number)
  )
  return availableNumbers[Math.floor(Math.random() * availableNumbers.length)]
}

const initialBoard = ()=> Array(16).fill({imageIndex:0,isOpened:false})

const useMemory= () => {
    const [board, setBoard] = useState(initialBoard)
    const [selectedIndices, setSelectedIndices] = useState([]);

    const imageComponents = [burger, chocobar, iceCream, popsicle, cake, ramen, pizza, fries]
    const shuffleCards = () => {
      const shuffledList = []
      const imageCount = imageComponents.length
      const newBoard = [...initialBoard()];

      for (let i = 0; i < imageCount; i++) {
        let randomIndex = getRandomNumber(shuffledList);
        newBoard[randomIndex] = {imageIndex:i,isOpened:false};
        shuffledList.push(randomIndex);
  
        randomIndex = getRandomNumber(shuffledList);
        newBoard[randomIndex] = {imageIndex:i,isOpened:false};
        shuffledList.push(randomIndex);
      }
  
      setBoard(newBoard);
    }
    const handleClick = (index) => {
       if (selectedIndices.length < 2 && !board[index].isOpened) {
      const newBoard = [...board]
      newBoard[index] = { ...newBoard[index], isOpened: true }

      setBoard(newBoard)
      const newSelectedIndices = [...selectedIndices, index]
      setSelectedIndices(newSelectedIndices)

      if (newSelectedIndices.length === 2) {
        setTimeout(() => checkMatch(newSelectedIndices, newBoard), 1000)
      }
    }
  }
    const checkMatch = (indices, currentBoard) => {
      const [firstIndex, secondIndex] = indices
      if (currentBoard[firstIndex].imageIndex !== currentBoard[secondIndex].imageIndex) {
        const updatedBoard = currentBoard.map((card, idx) =>
          idx === firstIndex || idx === secondIndex ? { ...card, isOpened: false } : card
        )
        setBoard(updatedBoard)
      }
      setSelectedIndices([])
    }

    return {board,imageComponents,shuffleCards,handleClick}
}

export default useMemory
