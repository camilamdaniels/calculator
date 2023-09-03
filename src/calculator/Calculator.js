import React, { useState, useEffect } from 'react'
import './index.css'

const Calculator = () => {

    const [currentExpression, setCurrentExpression] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
        const expression = '';
        const answer = '';

        // 
    })

    const handleEval = () => {
        // evaluate expression stored in 'currentExpression'
        // called when equal button is clicked
    }

    const handleInv = () => {

    }

    const handleAns = () => {
        
    }

  return (
    <div className='calculator'>
        <div className='buttonWrapper'>
            <input />
            
            <div className='mode'>Rad</div>
            <div className='mode'>Deg</div>
            <div className='operand'>x!</div>
            <div className='operand'>{'('}</div>
            <div className='operand'>{')'}</div>
            <div className='operand'>%</div>
            <div className='operand'>AC</div>

            <div className='value'>Inv</div>
            <div className='operand'>sin</div>
            <div className='operand'>ln</div>
            <div className='number'>7</div>
            <div className='number'>8</div>
            <div className='number'>9</div>
            <div className='operand'>/</div>

            <div className='value'>π</div>
            <div className='operand'>cos</div>
            <div className='operand'>log</div>
            <div className='number'>4</div>
            <div className='number'>5</div>
            <div className='number'>6</div>
            <div className='operand'>x</div>

            <div className='value'>e</div>
            <div className='operand'>tan</div>
            <div className='operand'>√</div>
            <div className='number'>1</div>
            <div className='number'>2</div>
            <div className='number'>3</div>
            <div className='operand'>-</div>

            <div className='value'>Ans</div>
            <div className='operand'>EXP</div>
            <div className='operand'>x^y</div>
            <div className='number'>0</div>
            <div className='number'>.</div>
            <div className='evaluator'>=</div>
            <div className='operand'>+</div>
        </div>
    </div>
  )
}

export default Calculator