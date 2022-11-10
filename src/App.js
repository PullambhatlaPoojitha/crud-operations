import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <>
          <h4>/read for posting the data</h4>
          <h4>/update for editing the data</h4>
          <h4>/delete for deleting the data</h4>
        </>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
