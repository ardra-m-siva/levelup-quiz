import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PieChart from '../components/PieChart';
import { getAllProgressDetailsApi } from '../services/allApi';

export const ProgressHistory = () => {
  const [progressData, setProgressData] = useState([])
  const [totals, setTotals] = useState({
    totalGames: 0,
    totalWins: 0,
    totalLose: 0
  })
  useEffect(() => {
    fetchProgressDetails()
  }, [])

  const fetchProgressDetails = async () => {
    try {
      let token = sessionStorage.getItem('token')
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllProgressDetailsApi(reqHeader)
      console.log(result.data);

      const subjectProgress = result.data?.subjectProgress || [];
      const processedProgressData = subjectProgress.map(item => ({ ...item, gamesPlayed: (item.wins || 0) + (item.lose || 0) }))
      setProgressData(processedProgressData)
      const totalWin = result.data?.totalGameWin || 0;
      const totalLose = result.data?.totalGameLose || 0;
      setTotals({
        ...totals,
        totalWins: totalWin,
        totalLose: totalLose,
        totalGames: totalWin + totalLose
      })
    } catch (err) {
      console.log(err);
    }
  }

  const topSubject = progressData.reduce((best, item) => {
    const winRate = item.gamesPlayed ? item.wins / item.gamesPlayed : 0;
    const bestRate = best.gamesPlayed ? best.wins / best.gamesPlayed : 0;
    return winRate > bestRate ? item : best;
  }, progressData[0]);

  const maxLossSubject = progressData.reduce((max, item) =>
    item.lose > max.lose ? item : max, progressData[0]);

  const noWins = progressData.filter(item => item.wins === 0);

  const determineGoal = () => {
    const subjectsNeedingMoreWins = progressData.filter(item => item.wins < 3);
    if (subjectsNeedingMoreWins.length === 0) {
      return "🎉 Great job! You've met the goal in all subjects!";
    } else if (totals.totalGames < 10) {
      return "🧪 Keep going! Play at least 10 games to unlock stats.";
    } else {
      return `🎯Win at least 3 games in ${subjectsNeedingMoreWins.length} subject(s)`;
    }
  };
  return (
    <>
      <Header />
      <div className="container mt-4">
        {/* Overall Stats */}
        <h2 className="text-center mb-4">Progress History</h2>
        <div className="row text-center mb-4">
          <div className="col-12 col-lg-6 mb-4">
            <PieChart progressData={progressData} />
          </div>
          <div className='col-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center'>
            <div className="m-2" style={{ minWidth: "160px" }}>
              <div className="bg-secondary rounded p-3 text-white shadow">
                <h4 className="mb-1">{totals.totalGames}</h4>
                <p className="text-white mb-0 ">Total Games</p>
              </div>
            </div>
            <div className=" m-2" style={{ minWidth: "160px" }}>
              <div className=" bg-success text-white rounded p-3 shadow">
                <h4 className="mb-1">{totals.totalWins}</h4>
                <p className="mb-0">Total Wins</p>
              </div>
            </div>
            <div className=" m-2" style={{ minWidth: "160px" }}>
              <div className=" bg-danger text-white rounded p-3 shadow">
                <h4 className="mb-1">{totals.totalLose}</h4>
                <p className="mb-0">Total Losses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <h4 className="text-center my-4">Subject-wise Performance</h4>
        <div className="row my-5">
          <div className="col-12 col-lg-6 mb-3">
            <div className="list-group">
              {
                progressData.map((item, index) => (
                  <div key={index} className="list-group-item list-group-item-action align-items-start">
                    <h5 className="mb-1">{item.subject}</h5>
                    <div className="progress mb-2">
                      <div className="progress-bar bg-success" style={{ width: `${(item.wins / item.gamesPlayed) * 100}%` }} > {item.wins} Wins </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className="mb-2">Games Played: {item.gamesPlayed}</p>

                      <p className="text-muted">Losses: {item.lose}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="p-3 border rounded-3 bg-light shadow-sm h-100">
              <h4 className="mb-4 text-primary text-center fw-bolder">Summary</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between p-3">
                  <span>Total Subjects Played</span>
                  <strong>{progressData.length}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between p-3">
                  <span>Total Games Played</span>
                  <strong>{progressData.reduce((acc, item) => acc + item.gamesPlayed, 0)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between p-3">
                  <span>📈 Best Performer</span>
                  <strong>{topSubject?.subject || 'N/A'}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between p-3">
                  <span>⚠️ Most Losses</span>
                  <strong>{maxLossSubject?.subject || 'N/A'}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between p-3">
                  <span>🏆 Win Rate</span>
                  <strong>{((totals.totalWins / totals.totalGames) * 100).toFixed(1)}%</strong>
                </li>
              </ul>
              {noWins.length > 0 && (
                <div className="mb-4 mx-3">
                  <p className="fw-bold text-danger">❌ No Wins Yet:</p>
                  <ol className="ps-3 text-muted">
                    {noWins.map((item, idx) => (
                      <li className='py-1' key={idx}>{item.subject}</li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="alert alert-info mt-3" role="alert">
                <strong>Goal:</strong> {determineGoal()}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
