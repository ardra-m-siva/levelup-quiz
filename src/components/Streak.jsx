import React, { useEffect, useState } from 'react'
import { getStreakDetailsApi, getStreaksApi } from '../services/allApi';

const Streak = () => {

    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    // const [lastActiveDay,setLastActiveDay]=useState("")
    const [activeDays, setActiveDays] = useState([]);

    useEffect(() => {
        getStreaks()
        let i = 0;
        const interval = setInterval(() => {
            if (i <= currentStreak) setCurrentStreak(i);
            if (i <= longestStreak) setLongestStreak(i);
            i++;
            if (i > longestStreak) clearInterval(interval);
        }, 100); // Animation for numbers
    }, []);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getStreaks = async () => {
        try {
            const token = sessionStorage.getItem('token')
            if (token) {
                const reqHeaders = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                await getStreakDetailsApi(reqHeaders)
                const result = await getStreaksApi(reqHeaders)
                console.log(result.data);

                setCurrentStreak(result.data.currentStreak)
                setLongestStreak(result.data.longestStreak)
                highlightStreakDays(result.data.lastActiveDate, result.data.currentStreak);
            }
        } catch (err) {
            console.log(err);

        }
    }

    const highlightStreakDays = (lastActiveDate, streakCount) => {
        const activeDaysArray = [];
        let date = new Date(lastActiveDate);
        for (let i = 0; i < streakCount; i++) {
            activeDaysArray.push(date.getDay());
            date.setDate(date.getDate() - 1);
        }
        setActiveDays(activeDaysArray);
    };
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
                        <p className="fw-bold">Current Streak: <span style={{ color: "#11999E", fontSize: "1.5rem", fontWeight: "bold", }}>{currentStreak} Days</span></p>
                        <p className="fw-bold">Longest Streak: <span style={{ color: "#11999E", fontSize: "1.5rem", fontWeight: "bold", }}>{longestStreak} Days</span></p>
                    </div>

                    {/* Streak Bar */}
                    <div className="col d-flex flex-wrap justify-content-center gap-3">
                        {days.map((day, index) => (
                            <div key={index} className={`streak-dot ${activeDays.includes(index) ? "active" : ""}`} >
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