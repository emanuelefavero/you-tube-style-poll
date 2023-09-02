'use client'

import { useState } from 'react'

export default function Poll() {
  const question = 'What is the capital city of France?'
  const answers = [
    {
      text: 'London',
      votes: 100,
    },
    {
      text: 'Paris',
      votes: 200,
    },
    {
      text: 'Berlin',
      votes: 66,
    },
  ]
  const totalVotes = 366
  const correctAnswer = 1
  const correctAnswerExplanation = 'Paris is the capital city of France.'

  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

  const handleAnswerClick = (index: number) => {
    // If the answer clicked is equal to the already selected answer, deselect it and hide the correct answer explanation
    if (index === selectedAnswer) {
      setSelectedAnswer(-1)
      setShowCorrectAnswer(false)
    } else {
      setSelectedAnswer(index)
      setShowCorrectAnswer(true)
    }
  }

  return (
    <section>
      <h1>{question}</h1>
      <ul>
        {answers.map((answer, index) => {
          const percentage = Math.round((answer.votes / totalVotes) * 100)
          return (
            <li key={index}>
              <button onClick={() => handleAnswerClick(index)}>
                <p>{answer.text}</p>
                <span>{percentage}%</span>
              </button>
            </li>
          )
        })}
      </ul>
      <p>{totalVotes}</p> answered
      {showCorrectAnswer && <p>{correctAnswerExplanation}</p>}
    </section>
  )
}
