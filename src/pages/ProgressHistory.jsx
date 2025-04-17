import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PieChart from '../components/PieChart';

export const ProgressHistory = () => {
  const progressData = [
    { subject: "JavaScript", gamesPlayed: 10, wins: 6, losses: 4 },
    { subject: "React", gamesPlayed: 8, wins: 5, losses: 3 },
    { subject: "Next.js", gamesPlayed: 5  , wins: 2, losses: 3 },
  ];
  const progress = {
    firstPlayed: "March 1, 2025",
    streak: 10, // Number of consecutive days played
    consistency: 80, // % of days played since first played
  };
  // Calculate total stats
  const totalGames = progressData.reduce((acc, item) => acc + item.gamesPlayed, 0);
  const totalWins = progressData.reduce((acc, item) => acc + item.wins, 0);
  const totalLosses = progressData.reduce((acc, item) => acc + item.losses, 0);
  const { firstPlayed, streak, consistency } = progress;

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
                <h4 className="mb-1">{totalGames}</h4>
                <p className="text-white mb-0 ">Total Games</p>
              </div>
            </div>
            <div className=" m-2" style={{ minWidth: "160px" }}>
              <div className=" bg-success text-white rounded p-3 shadow">
                <h4 className="mb-1">{totalWins}</h4>
                <p className="mb-0">Total Wins</p>
              </div>
            </div>
            <div className=" m-2" style={{ minWidth: "160px" }}>
              <div className=" bg-danger text-white rounded p-3 shadow">
                <h4 className="mb-1">{totalLosses}</h4>
                <p className="mb-0">Total Losses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <h4 className="text-center my-4">Subject-wise Performance</h4>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="list-group mb-5">
              {progressData.map((item, index) => (
                <div key={index} className="list-group-item">
                  <h5 className="mb-1">{item.subject}</h5>
                  <p className="mb-2">Games Played: {item.gamesPlayed}</p>
                  <div className="progress mb-2">
                    <div className="progress-bar bg-success" style={{ width: `${(item.wins / item.gamesPlayed) * 100}%` }} > {item.wins} Wins </div>
                  </div>
                  <p className="text-muted">Losses: {item.losses}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card text-center shadow-sm p-3 my-5">
              <div className="card-body">
                <h5 className="card-title mb-3">Player Progress</h5>
                <p className="card-text">
                  <strong>First Played:</strong> {firstPlayed}
                </p>
                <p className="card-text ">
                  <strong>Current Streak:</strong> {streak} days 🔥
                </p>
                <p className="card-text">
                  <strong>Consistency:</strong> {consistency}% 📈
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
