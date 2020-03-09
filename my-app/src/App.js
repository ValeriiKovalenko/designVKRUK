import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import mainPage from './pages/mainPage/mainPage';
import navBar from './components/navBar/navBar';
import portfolio from './pages/portfolio/portfolio';
import prices from './pages/prices/prices';
import aboutMe from './pages/aboutMe/aboutMe';
import contacts from './pages/contacts/contacts';


const App = () => {
    return (
        <div className={styles.mainPage}>
            <Router>
                <Route path="/" component={navBar} />
                <Route exact path="/" component={mainPage} />
                <Route path="/portfolio" component={portfolio} />
                <Route path="/prices" component={prices} />
                <Route path="/about" component={aboutMe} />
                <Route path="/contacts" component={contacts} />
            </Router>


        </div>

    )

};

export default App;
