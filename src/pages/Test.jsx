import React, { useState } from 'react';
import "../../scss/custom.css";
import CButton from '../components/CButton';
import { Link } from 'react-router-dom';

const questions = [
    { question: "Me siento comúnmente cansado", id: "q1" },
    { question: "Me di cuenta que tenía la boca seca", id: "q2" },
    { question: "No podía sentir ningún sentimiento positivo", id: "q3" },
    { question: "Se me hizo difícil respirar", id: "q4" },
    { question: "Se me hizo difícil tomar la iniciativa para hacer cosas", id: "q5" },
    { question: "Reaccioné exageradamente en ciertas situaciones", id: "q6" },
    { question: "Sentí que mis manos temblaban", id: "q7" },
    { question: "He sentido que estaba gastando una gran cantidad de energía", id: "q8" },
    { question: "Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo ", id: "q9" },
    { question: "He sentido que no había nada que me ilusionara", id: "q10" },
    { question: "Me he sentido inquieto ", id: "q11" },
    { question: "Se me hizo difícil relajarme", id: "q12" },
    { question: "Me sentí triste y deprimido", id: "q13" },
    { question: "No toleré nada que no me permitiera continuar con lo que estaba haciendo", id: "q14" },
    { question: "Sentí que estaba al punto de pánico", id: "q15" },
    { question: "No me pude entusiasmar por nada", id: "q16" },
    { question: "Sentí que valía muy poco como persona", id: "q17" },
    { question: "He tendido a sentirme enfadado con facilidad", id: "q18" },
    { question: "Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico", id: "q19" },
    { question: "Tuve miedo sin razón", id: "q20" },
    { question: "Sentí que la vida no tenía ningún sentido.", id: "q21" }
];

const Test = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [results, setResults] = useState(null);

    const handleAnswerChange = (event) => {
        const value = event.target.value;
        const questionId = questions[currentQuestionIndex].id;

        setResponses({
            ...responses,
            [questionId]: value
        });
        
        setSelectedAnswer(value);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            calculateResults();
        }
    };

    const calculateResults = () => {
        let depressionScore = 0;
        let anxietyScore = 0;
        let stressScore = 0;

        depressionScore += (Number(responses.q3) || 0) +
                       (Number(responses.q5) || 0) +
                       (Number(responses.q10) || 0) +
                       (Number(responses.q13) || 0) +
                       (Number(responses.q16) || 0) +
                       (Number(responses.q17) || 0) +
                       (Number(responses.q21) || 0);
                       
        anxietyScore += (Number(responses.q2) || 0) +
                        (Number(responses.q4) || 0) +
                        (Number(responses.q7) || 0) +
                        (Number(responses.q9) || 0) +
                        (Number(responses.q15) || 0) +
                        (Number(responses.q19) || 0) +
                        (Number(responses.q20) || 0);
                        
        stressScore += (Number(responses.q1) || 0) +
                      (Number(responses.q6) || 0) +
                      (Number(responses.q8) || 0) +
                      (Number(responses.q11) || 0) +
                      (Number(responses.q12) || 0) +
                      (Number(responses.q14) || 0) +
                      (Number(responses.q18) || 0);

        setResults({ depressionScore, anxietyScore, stressScore });
    };

    const getDepressionLevel = (score) => {
        if (score >= 14) return 'Depresión extremadamente severa';
        if (score >= 11) return 'Depresión severa';
        if (score >= 7) return 'Depresión moderada';
        if (score >= 5) return 'Depresión leve';
        return 'No tiene depresión';
    };

    const getAnxietyLevel = (score) => {
        if (score >= 10) return 'Ansiedad extremadamente severa';
        if (score >= 8) return 'Ansiedad severa';
        if (score >= 5) return 'Ansiedad moderada';
        if (score >= 4) return 'Ansiedad leve';
        return 'No tiene ansiedad';
    };

    const getStressLevel = (score) => {
        if (score >= 17) return 'Estrés extremadamente severo';
        if (score >= 13) return 'Estrés severo';
        if (score >= 10) return 'Estrés moderado';
        if (score >= 8) return 'Estrés leve';
        return 'No tiene estrés';
    };

    return (
        <div className='dotted vh-100 vw-100 d-flex text-center justify-content-center'>
            <div className='container box bg-primary test-bg w-75 text-white custom-bg rounded border p-3 border-secondary mt-5'>
                <h1 className='mt-1 display-4 test-title'>Test</h1>
                <Link to="/home"><svg className='back-arrow' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></Link>
                {!results ? (
                    <>
                        <div className='shadowth bg-terciary h-25 w-100 rounded mx-auto mt-3'>
                            <p className='ins-text mt-1'>Conteste la encuesta teniendo en cuenta los siguientes valores</p>
                            <h6>0. Nunca</h6>
                            <h6>1. A veces</h6>
                            <h6>2. Casi Siempre</h6>
                            <h6>3. Siempre</h6>
                        </div>
                        <div className='shadowth bg-terciary rounded mx-auto mt-3 h-50 w-100'>
                            <h2 className='mb-3'>{questions[currentQuestionIndex].question}</h2>
                            {[0, 1, 2, 3].map(value => (
                                <div key={value}>
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name={questions[currentQuestionIndex].id} 
                                        value={value} 
                                        onChange={handleAnswerChange} 
                                        checked={selectedAnswer === value.toString()} 
                                        id={`answer-${questions[currentQuestionIndex].id}-${value}`} 
                                    />
                                    <label className="form-check-label" htmlFor={`answer-${questions[currentQuestionIndex].id}-${value}`}>
                                        {value}
                                    </label><br />
                                </div>
                            ))}
                            <CButton color='dark-blue' onClick={handleNextQuestion}>Siguiente</CButton>
                        </div>
                    </>
                ) : (
                    <div className="results">
                        <div className="bg-dark resultbox">
                        <h2>Resultados</h2>
                        <p><strong>Puntuación de Depresión:</strong> {results.depressionScore} - {getDepressionLevel(results.depressionScore)}</p>
                        <p><strong>Puntuación de Ansiedad:</strong> {results.anxietyScore} - {getAnxietyLevel(results.anxietyScore)}</p>
                        <p><strong>Puntuación de Estrés:</strong> {results.stressScore} - {getStressLevel(results.stressScore)}</p>
                        <Link to="/contacts"><CButton outline color='secondary' className="text-white">Comunicate con alguien</CButton></Link>
                        </div>
                        <div className='shadowth bg-terciary w-75 mx-auto px-3  pb-3 rounded'>
                          <h2>ADVERTENCIA</h2>
                          <h5 className=''>Esta función no está destinada a diagnosticar o tratar ninguna condición médica y no debe ser confiada para ningún propósito médico. Está diseñada para proporcionar información que puede ayudarle a gestionar su bienestar. Si tiene alguna preocupación sobre su salud, hable con un proveedor de atención médica. Si cree que está experimentando una emergencia médica, llame a los servicios de emergencia.</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Test;