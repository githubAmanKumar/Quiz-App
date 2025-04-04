import React from 'react'

const QuestionList = ({ question, options, handleClick, currentAnswer }) => {
    return (
        <>
            <h2>{question}</h2>
            <ul>
                {options.map((option,index)=>(
                    <li key={index} onClick={()=>handleClick(option)} className={currentAnswer===option?'selected':'notselected'}>{option}</li>
                ))}
            </ul>
        </>
    )
}

export default QuestionList