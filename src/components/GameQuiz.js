import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './game-quiz.css';
import { gamequiz_data } from '../data/data';

const GameQuiz = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(15);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (countdown > 0 && gameStarted) {
            const timerId = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else if (gameStarted) {
            if (selectedAnswer === null) {
                setSelectedAnswer(gamequiz_data[currentQuestion].options.findIndex(option => option === gamequiz_data[currentQuestion].answer));
            }
            setAnswerSubmitted(true);
        }
    }, [countdown, answerSubmitted, currentQuestion, gameStarted, selectedAnswer]);
    
    

    const handleAnswerOptionClick = (answerOption, index) => {
        if (!answerSubmitted) {
            setSelectedAnswer(index);
            if (answerOption === gamequiz_data[currentQuestion].answer) {
                setScore(score + 1);
            }
            setAnswerSubmitted(true);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < gamequiz_data.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setAnswerSubmitted(false);
            setCountdown(15); 
        } else {
            setShowScore(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setAnswerSubmitted(false);
        setCountdown(15);
        setGameStarted(true);
        setShowScore(false); 
    };
    

    return (
        <div className='gamequiz-side'>
        {gameStarted && !answerSubmitted && <div className="countdown">{countdown}</div>}
        {!gameStarted ? (
            <button className="start-button" onClick={() => setGameStarted(true)}>Bắt đầu</button>
) : (
    <div className='info-gamequiz-container'>
        {showScore ? (
    <div className='score-section'>
        <div className='score'>You scored {score} out of {gamequiz_data.length}</div>
        <div className='button-section'>
            <button className="restart-button" onClick={handleRestart}>Làm lại</button>
            <button className="home-button" onClick={() => {setGameStarted(false); setAnswerSubmitted(false); setShowScore(false); setCurrentQuestion(0); setScore(0)}}>Quay về trang bắt đầu</button>
        </div>
    </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{gamequiz_data.length}
                                </div>
                                <div className='question-text'>{gamequiz_data[currentQuestion].question}</div>
                            </div>
                            <div className='answer-section'>
                                {gamequiz_data[currentQuestion].options.map((answerOption, index) => (
                                    <button 
                                        onClick={() => handleAnswerOptionClick(answerOption, index)} 
                                        key={index}
                                        className={`answer-button ${answerSubmitted ? (answerOption === gamequiz_data[currentQuestion].answer ? 'correct' : (selectedAnswer === index ? 'incorrect' : '')) : ''}`}
                                    >
                                        {answerOption}
                                    </button>
                                ))}
                            </div>
                            {answerSubmitted && <button onClick={handleNextQuestion}>Tiếp tục</button>}
                        </>
                    )}
                </div>
            )}
            <button className="btn-gamequiz-back" onClick={() => navigate('/')}><FontAwesomeIcon icon={faRightToBracket} /> HomePage</button>
        </div>
    );
    
}

export default GameQuiz;
