import React, { createContext, useState } from 'react'
export const currentTopicContext = createContext()
export const currentLevelContext=createContext()
export const isAnswerRightContext=createContext()
const SubjectContext = ({ children }) => {
    const [cTopic, setCTopic] = useState("")
    const [isRight, setIsRight] = useState("")
    const [level, setLevel] = useState("")
    return (
            <isAnswerRightContext.Provider value={{isRight,setIsRight}}>
                <currentLevelContext.Provider value={{level, setLevel}}>
                    <currentTopicContext.Provider value={{cTopic,setCTopic}}>
                        {children}
                    </currentTopicContext.Provider>
                </currentLevelContext.Provider>
            </isAnswerRightContext.Provider>
    )
}

export default SubjectContext