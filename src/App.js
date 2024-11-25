import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const TestComponent = () => {
  return <h1>Hello Covenant Cards!</h1>;
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covenant Cards</h1>
        <div className="overview-section">
          <p>
            Covenant Cards is a deck of cards designed for Christian Couples to get their 
            relationships aligned and on fire. The fading light of most marriages is the 
            result of a lack of communication or miscommunication, and these 50+ cards 
            will bring couples together in an engaging, fun, and productive way to 
            FIGHT <em>for</em> their marriage, not <em>with</em> each other.
          </p>
          
          <h2>FIGHT stands for:</h2>
          <ul>
            <li><strong>F</strong>aith: Strengthening your spiritual connection as a couple</li>
            <li><strong>I</strong>ntimacy: Fostering emotional and physical closeness</li>
            <li><strong>G</strong>oals: Setting and achieving shared aspirations</li>
            <li><strong>H</strong>abits: Developing positive routines that nurture your relationship</li>
            <li><strong>T</strong>eamwork: Working together to overcome challenges and grow</li>
          </ul>
          
          <p>
            These cards cover a wide range of topics essential for a strong Christian marriage, 
            addressing each aspect of FIGHT. They prompt meaningful discussions and encourage 
            couples to explore their relationship deeper, fostering understanding and growth 
            in their faith, intimacy, shared goals, daily habits, and ability to work as a team.
          </p>
        </div>
        
        <BrowserRouter basename="/Covenant-Cards">
          <Routes>
            <Route path="/" element={<TestComponent />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;