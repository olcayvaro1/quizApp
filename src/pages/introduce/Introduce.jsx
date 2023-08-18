import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'


const Introduce = () => {  
    const difficulty = ["easy", "medium", "hard"]
    const[difficultyChange, setDifficultyChange ] = useState('')
    const navigate = useNavigate() 
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () =>{
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }

  return (
    <div className='introduce' >
        <div className="introduce-container">
            <img src="data:image/png;base64,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" alt=''  />
            <Dropdown data={difficulty}  setDifficultyChange={setDifficultyChange} /> 
            <div onClick={startQuiz} className='introduce-btn' >Quiz'e başla</div>
        </div>
    </div>
  )
}

export default Introduce