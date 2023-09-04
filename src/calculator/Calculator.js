import React, { useState, useEffect } from 'react'
import './index.css'

const Calculator = () => {

    const [currentExpression, setCurrentExpression] = useState('');
    const [stack, setStack] = useState([]);
    const [answer, setAnswer] = useState('');

    const handleClear = () => {
        setCurrentExpression('');
        // console.log(currentExpression)
    } 

    const handleClick = (e) => {
        // 1-9, ., e, pi, +, -, *, /
        
        let val = e.target.innerHTML;
        if (val == 'e') val = 2.718
        else if (val == 'π') val = 3.14
        else if (val == 'x^y') val = '^'

        // setStack([...stack, val])
        // console.log(stack)

        setCurrentExpression(currentExpression + val)
        setAnswer(currentExpression + val)
        // console.log(currentExpression);
    }

    const handleEvaluate = () => {
        // evaluate expression stored in 'currentExpression'
        // called when equal button is clicked

        if (typeof answer == 'string' && answer.includes('^')) {
            const argumentList = answer.split('^')
            const a = +answer[0]
            const b = +answer[2]
            setCurrentExpression((a ** b).toString())
            setAnswer((a ** b).toString())
            return
        }
        
        const a = eval(answer)
        setCurrentExpression(a)
        setAnswer(a)
    }

    const evaluate = (e) => {
        // calls handleEvaluate to evaluate expression stored in 'currentExpression'

        let operand = e.target.innerHTML
        let answer = eval(currentExpression)

        if (operand == 'Inv') {
            setCurrentExpression(answer*-1)
            setAnswer(answer*-1)
        } else if (operand == '%') {
            setCurrentExpression(answer/100)
            setAnswer(answer/100)
        } else if (operand == 'x!') {
            let factorial = answer;
            const label = answer;
            if (answer == 0 || answer == 1) {
                setCurrentExpression(1)
                setAnswer(1)
            }
            while (answer > 1) {
                answer--
                factorial *= answer
            }
            setCurrentExpression(label + '! = ' + factorial)
            setAnswer(factorial)
        } else if (operand == '√') {
            const label = '√' + answer + ' = '
            setCurrentExpression(label + Math.sqrt(answer))
            setAnswer(Math.sqrt(answer))
        } else if (operand == 'EXP') {
            setCurrentExpression(2.718 ** answer)
            setAnswer(2.718 ** answer)
        } else if (operand == 'sin') {
            // TODO: error handling if user doesn't type number before pressing button
            const label = 'sin(' + answer + ') = '
            setCurrentExpression(label + Math.sin(answer))
            setAnswer(Math.sin(answer))
        } else if (operand == 'cos') {
            // TODO: error handling if user doesn't type number before pressing button
            const label = 'cos(' + answer + ') = '
            setCurrentExpression(label + Math.cos(answer))
            setAnswer(Math.cos(answer))
        } else if (operand == 'tan') {
            // TODO: error handling if user doesn't type number before pressing button
            const label = 'tan(' + answer + ') = '
            setCurrentExpression(label + Math.tan(answer))
            setAnswer(Math.tan(answer))
        } else if (operand == 'ln') {
            // TODO: error handling if user doesn't type number before pressing button
            const label = 'ln(' + answer + ') = '
            setCurrentExpression(label + Math.log(answer))
            setAnswer(Math.log(answer))
        } else if (operand == 'log') {
            // TODO: error handling if user doesn't type number before pressing button
            const label = 'log(' + answer + ') = '
            setCurrentExpression(label + Math.log10(answer))
            setAnswer(Math.log10(answer))
        } 
    }

    const handleAns = () => {
        // TODO
        // calls handleEvaluate to evaluate expression stored in 'currentExpression'
        // update value stored in answer
        // called when ans button is clicked
        // is this function necessary? duplicates behavior of handleEvaluate function
    }

    useEffect(() => {

        document.getElementById('exp').value = currentExpression;
        // console.log(stack)
    })

  return (
    <div className='calculator'>
        <div className='buttonWrapper'>
            <input id='exp' />
            
            <div className='mode'>Rad</div>
            <div className='mode'>Deg</div>
            <div className='operand' onClick={evaluate}>x!</div>
            <div className='operand' onClick={handleClick}>{'('}</div>
            <div className='operand' onClick={handleClick}>{')'}</div>
            <div className='operand' onClick={evaluate}>%</div>
            <div className='operand' onClick={handleClear}>AC</div>

            <div className='value' onClick={evaluate}>Inv</div>
            <div className='operand' onClick={evaluate}>sin</div>
            <div className='operand' onClick={evaluate}>ln</div>
            <div className='number' onClick={handleClick}>7</div>
            <div className='number' onClick={handleClick}>8</div>
            <div className='number' onClick={handleClick}>9</div>
            <div className='operand' onClick={handleClick}> / </div>

            <div className='value' onClick={handleClick}>π</div>
            <div className='operand' onClick={evaluate}>cos</div>
            <div className='operand' onClick={evaluate}>log</div>
            <div className='number' onClick={handleClick}>4</div>
            <div className='number' onClick={handleClick}>5</div>
            <div className='number' onClick={handleClick}>6</div>
            <div className='operand' onClick={handleClick}> * </div>

            <div className='value' onClick={handleClick}>e</div>
            <div className='operand' onClick={evaluate}>tan</div>
            <div className='operand' onClick={evaluate}>√</div>
            <div className='number' onClick={handleClick}>1</div>
            <div className='number' onClick={handleClick}>2</div>
            <div className='number' onClick={handleClick}>3</div>
            <div className='operand' onClick={handleClick}> - </div>

            <div className='value'>Ans</div>
            <div className='operand' onClick={evaluate}>EXP</div>
            <div className='operand' onClick={handleClick}>x^y</div>
            <div className='number' onClick={handleClick}>0</div>
            <div className='number' onClick={handleClick}>.</div>
            <div className='evaluator' onClick={handleEvaluate}>=</div>
            <div className='operand' onClick={handleClick}> + </div>
        </div>
    </div>
  )
}

export default Calculator