import React, { useState } from 'react'

const Questions = () => {
  const [addOnSubject,setAddOnSubject]=useState("")
  console.log(addOnSubject);
  
  return (
    <div>
     <h5> Added Questions</h5>
     <div>
      <button onChange={(e)=>setAddOnSubject(e.target.value)} className='btn btn-info '>+ Add Questions to Internal Subjects</button>
     </div>
    </div>

  )
}

export default Questions