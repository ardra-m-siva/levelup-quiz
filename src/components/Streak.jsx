import React, { useEffect, useState } from 'react'

const Streak = () => {

    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= 9) setCurrentStreak(i);
            if (i <= 16) setLongestStreak(i);
            i++;
            if (i > 16) clearInterval(interval);
        }, 100); // Animation for numbers
    }, []);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <div>
            <div style={{ background: "linear-gradient(135deg,rgb(27, 43, 53),rgb(77, 99, 123))", width: '100%' }} className="text-center rounded p-4" >
                {/* style={{backgroundColor:'#40514e'}} className="text-center rounded p-2" */}
                <h2 className="fw-bold text-light mb-3">
                    Streaks <span className="text-warning">🔥</span>
                </h2>

                <div className='row align-items-center '>
                    {/* Streak Info */}
                    <div className="col fs-4 text-light border-end">
                        <p className="fw-bold">Current Streak: <span style={{ color: "#11999E", fontSize: "1.5rem", fontWeight: "bold", }}>{9} Days</span></p>
                        <p className="fw-bold">Longest Streak: <span style={{ color: "#11999E", fontSize: "1.5rem", fontWeight: "bold", }}>{16} Days</span></p>
                    </div>

                    {/* Streak Bar */}
                    <div className="col d-flex flex-wrap justify-content-center gap-3">
                        {days.map((day, index) => (
                            <div key={index} className={`streak-dot ${index < 5 ? "active" : ""}`} >
                                {day}
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Streak