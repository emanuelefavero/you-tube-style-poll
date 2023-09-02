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
    <section className='w-72 h-56 select-none'>
      <h1>{question}</h1>
      <ul>
        {/* ANSWERS */}
        {answers.map((answer, index) => {
          const percentage = Math.round((answer.votes / totalVotes) * 100)
          const answerClasses = `flex justify-between w-full border rounded-sm py-1 px-2 my-2 ${
            selectedAnswer === index
              ? index === correctAnswer
                ? 'text-green-400 border-green-500'
                : 'text-red-400 border-red-500'
              : 'text-neutral-400 border-neutral-500'
          }`

          return (
            <li key={index}>
              <button
                className={answerClasses}
                onClick={() => handleAnswerClick(index)}
              >
                <p>{answer.text}</p>
                {showCorrectAnswer && <span>{percentage}%</span>}
              </button>
            </li>
          )
        })}
      </ul>
      <p className='text-neutral-400 my-2'>{totalVotes} answered</p>
      {showCorrectAnswer && (
        <p className='bg-neutral-800 bg-opacity-50 rounded-sm py-1 px-2'>
          {correctAnswerExplanation}
        </p>
      )}
    </section>
  )
}
