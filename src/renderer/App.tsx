import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './assets/MainFrame.css';
import { ControlBar } from './components/ControlBar';
import './assets/ControlBar.css';
import BarLoader from "react-spinners/BarLoader";

const Hello = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, [])

  return (
    <div>
      <div className="MainFrame" style={{height: "100vh", backgroundColor: "rgb(31, 31, 31)"}}>
        {
          loading ?
          <BarLoader color="#123abc" loading={loading}/>
          :
          <ControlBar></ControlBar>
        }
        
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
