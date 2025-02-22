import React from 'react'
import Hyperspeed from '../styles/Hyperspeed'
import { Link } from 'react-router-dom';


const Home = () => {


  return (
   <>
      <div style={{ minHeight: '100vh', backgroundColor: 'rgb(6, 6, 6)' }} >
        <div style={{ position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10 }}>
          <span style={{ color: '#00FFFF', fontSize: '70px', fontWeight: 'bold', letterSpacing: '3px', fontFamily: "'Poppins', sans-serif", textShadow: '0px 4px 8px rgba(0, 255, 255, 0.6)' }} className='text-pop-up-top'>LEVELUP LEARN
            <p className='mb-5' style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '5px', opacity: 0.8 }}>
              A Game Where Learning Never Stops
            </p>
          </span>
          <div><Link to={'/login'} className='explore-btn'>Explore more</Link></div>
        </div>
  
        {/* <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}/>       */}
      </div>
     
   </>
  )
}

export default Home