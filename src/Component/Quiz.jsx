import { React, useState } from 'react'
import QuestionList from './QuestionList';
import './Quiz.css';

const Quiz = () => {
    const questions = [
        {
            "question": "What is JSX in React?",
            "options": ["JavaScript XML", "JSON Extension", "Java XML", "JavaScript Extension"],
            "answer": "JavaScript XML"
        },
        {
            "question": "Which method is used to update state in a React component?",
            "options": ["setState()", "updateState()", "changeState()", "modifyState()"],
            "answer": "setState()"
        },
        {
            "question": "What is the purpose of the useEffect hook?",
            "options": ["To fetch data", "To handle side effects", "To modify state", "To manage events"],
            "answer": "To handle side effects"
        },
        {
            "question": "Which of the following is NOT a React hook?",
            "options": ["useState", "useEffect", "useFetch", "useReducer"],
            "answer": "useFetch"
        },
        {
            "question": "How do you pass data from a parent component to a child component in React?",
            "options": ["Using Redux", "Using Context API", "Using Props", "Using useEffect"],
            "answer": "Using Props"
        },
        {
            "question": "What is the virtual DOM in React?",
            "options": ["A lightweight copy of the real DOM", "A real-time database", "A browser API", "A CSS preprocessor"],
            "answer": "A lightweight copy of the real DOM"
        },
        {
            "question": "Which React function is used to create a component?",
            "options": ["React.makeComponent()", "React.createElement()", "React.createComponent()", "React.newComponent()"],
            "answer": "React.createElement()"
        },
        {
            "question": "What is the correct way to write a functional component in React?",
            "options": [
                "function MyComponent() { return <div>Hello</div>; }",
                "class MyComponent extends React.Component { render() { return <div>Hello</div>; }}",
                "const MyComponent = new Component()",
                "MyComponent: function() { return <div>Hello</div>; }"
            ],
            "answer": "function MyComponent() { return <div>Hello</div>; }"
        },
        {
            "question": "What is React Router used for?",
            "options": ["State management", "Handling side effects", "Navigation between pages", "Styling components"],
            "answer": "Navigation between pages"
        },
        {
            "question": "Which lifecycle method is invoked after a component is rendered for the first time?",
            "options": ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "componentWillMount"],
            "answer": "componentDidMount"
        }
    ]
    ;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);

    const handleClick = (option) => {
        setCurrentAnswer(option)
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }

    const [score, setScore] = useState(0);
    return (
        <div>
            {currentQuestionIndex < questions.length ?
                <div>
                    <QuestionList question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options} handleClick={handleClick}
                        currentAnswer={currentAnswer}
                    />
                    <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion} >Next Question</button>
                </div> : <h2>Your Score is {score}</h2>
            }
        </div>
    )
}

export default Quiz