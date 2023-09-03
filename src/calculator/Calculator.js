import React, { useState, useEffect } from 'react'
import './index.css'

const Calculator = () => {

    const [currentExpression, setCurrentExpression] = useState('');
    const [answer, setAnswer] = useState();

    const removeSpaces = (num) => num.toString().replace(/\s/g, "");

    const handleClear = () => {
        setCurrentExpression('');
        console.log(currentExpression)
    } 

    const handleClick = (e) => {
        // 1-9, ., e, pi, +, -, *, /, EXP
        
        let val = e.target.innerHTML;
        if (val == 'e') val = 2.718
        else if (val == 'π') val = 3.14
        else if (val == 'EXP') val ='^'

        setCurrentExpression(currentExpression + ' ' + val)
        // setAnswer(evaluate(currentExpression))
        console.log(currentExpression);
    }

    const handleEvaluate = () => {
        // evaluate expression stored in 'currentExpression'
        // called when equal button is clicked
        const answer = eval(currentExpression)
        setCurrentExpression(answer)
        setAnswer(answer)
    }

    const evaluate = () => {
        // calls handleEvaluate to evaluate expression stored in 'currentExpression'
        // OPERANDS
        // sin, ln, cos, log, tan, !, %, Inv, sqrt, x^y
    }

    const handleAns = () => {
        // calls handleEvaluate to evaluate expression stored in 'currentExpression'
        // update value stored in answer
        // called when ans button is clicked
        // is this function necessary? duplicates behavior of handleEvaluate function
    }

    useEffect(() => {
        const expression = '';
        const answer = '';

        document.getElementById('exp').value = currentExpression;
    })

  return (
    <div className='calculator'>
        <div className='buttonWrapper'>
            <input id='exp'/>
            
            <div className='mode'>Rad</div>
            <div className='mode'>Deg</div>
            <div className='operand'>x!</div>
            <div className='operand'>{'('}</div>
            <div className='operand'>{')'}</div>
            <div className='operand'>%</div>
            <div className='operand' onClick={handleClear}>AC</div>

            <div className='value'>Inv</div>
            <div className='operand'>sin</div>
            <div className='operand'>ln</div>
            <div className='number' onClick={handleClick}>7</div>
            <div className='number' onClick={handleClick}>8</div>
            <div className='number' onClick={handleClick}>9</div>
            <div className='operand' onClick={handleClick}>/</div>

            <div className='value' onClick={handleClick}>π</div>
            <div className='operand'>cos</div>
            <div className='operand'>log</div>
            <div className='number' onClick={handleClick}>4</div>
            <div className='number' onClick={handleClick}>5</div>
            <div className='number' onClick={handleClick}>6</div>
            <div className='operand' onClick={handleClick}>*</div>

            <div className='value' onClick={handleClick}>e</div>
            <div className='operand'>tan</div>
            <div className='operand'>√</div>
            <div className='number' onClick={handleClick}>1</div>
            <div className='number' onClick={handleClick}>2</div>
            <div className='number' onClick={handleClick}>3</div>
            <div className='operand' onClick={handleClick}>-</div>

            <div className='value'>Ans</div>
            <div className='operand' onClick={handleClick}>EXP</div>
            <div className='operand'>x^y</div>
            <div className='number' onClick={handleClick}>0</div>
            <div className='number' onClick={handleClick}>.</div>
            <div className='evaluator' onClick={handleEvaluate}>=</div>
            <div className='operand' onClick={handleClick}>+</div>
        </div>
    </div>
  )
}

export default Calculator