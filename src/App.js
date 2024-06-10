import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
import Overview from './components/Overview';
import VideoLibrary from './components/VideoLibrary';
import GameQuiz from './components/GameQuiz';
import UserManual from './components/UserManual';
import Faqs from './components/Faqs';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <div className="left-side">
              <h1>FMSS</h1>
              <h2>Fleet Management Software Suite</h2>
              <button className='overview' onClick={() => navigate('/overview')} ><FontAwesomeIcon icon={faGears} /> Overview</button>
              <button className='videos-library' onClick={() => navigate('/video-library')}><FontAwesomeIcon icon={faFilm} /> Video Library</button>
              <button className='quiz'onClick={() => navigate('/game-quiz')}><FontAwesomeIcon icon={faGamepad} /> Game - Quiz</button>
              <button className='user-manual' onClick={() => navigate('/user-manual')}><FontAwesomeIcon icon={faBook} /> User Manual</button>
              <button className='faqs' onClick={() => navigate('/faqs')}><FontAwesomeIcon icon={faCircleQuestion} /> FAQs</button>
            </div>
            <div className="right-side">
              <img src="../../images/logo.jpg" alt="Logo" /> 
            </div>
          </>
        } />
        <Route path="/overview" element={<Overview />} />
        <Route path="/video-library" element={<VideoLibrary />} />
        <Route path="/game-quiz" element={<GameQuiz />} />
        <Route path="/user-manual" element={<UserManual />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/" element={<App />} />
        {/* Other routes */}
        </Routes>
    </div>
  );
}


export default App;
