import React from 'react'

const Dropdown = ({data, setDifficultyChange}) => {
  return (
    <div className='dropdown'>
        <select onChange={e => setDifficultyChange(e.target.value)} name="" id="">
            {
                data.map((dt) =>(
                    <option value={dt} >{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown