'use client'

import { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

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
  const [showConfetti, setShowConfetti] = useState(false)

  const handleAnswerClick = (index: number) => {
    // If the answer clicked is equal to the already selected answer, deselect it and hide the correct answer explanation
    if (index === selectedAnswer) {
      setSelectedAnswer(-1)
      setShowCorrectAnswer(false)
    } else {
      setSelectedAnswer(index)
      setShowCorrectAnswer(true)
      setShowConfetti(true)
    }
  }

  return (
    <section className='w-72 h-56 select-none'>
      <h1>{question}</h1>
      <ul>
        {/* ANSWERS */}
        {answers.map((answer, index) => {
          const percentage = Math.round((answer.votes / totalVotes) * 100)

          return (
            <li key={index}>
              <button
                className={`overflow-hidden flex justify-between w-full border rounded-sm py-1 px-2 my-2 ${
                  // If the answer is selected, check if it's the correct answer and apply the correct color
                  selectedAnswer === index
                    ? index === correctAnswer
                      ? 'text-green-500 border-green-500'
                      : 'text-red-500 border-red-500'
                    : 'text-neutral-400 border-neutral-500'
                }`}
                onClick={() => handleAnswerClick(index)}
              >
                <p>{answer.text}</p>
                <div>
                  <div className='mr-5'>
                    {
                      // If the answer is selected and it's the correct answer, show the confetti
                      selectedAnswer === index && index === correctAnswer && (
                        <ConfettiExplosion
                          width={150}
                          particleCount={5}
                          force={0.1}
                          duration={2000}
                        />
                      )
                    }
                  </div>
                  {showCorrectAnswer && <span>{percentage}%</span>}
                </div>
              </button>
            </li>
          )
        })}
      </ul>
      <p className='text-neutral-400 my-2'>{totalVotes} answered</p>
      {showCorrectAnswer && (
        <p
          className={`${
            selectedAnswer === correctAnswer
              ? 'bg-custom-green-explanation'
              : 'bg-custom-red-explanation'
          } rounded-sm py-1 px-2`}
        >
          {correctAnswerExplanation}
        </p>
      )}
    </section>
  )
}
