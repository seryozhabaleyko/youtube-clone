import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import SearchPage from './components/SearchPage';

function App() {
    return (
        <>
            <Router>
                <Header />

                <main className="main">
                    <Sidebar />

                    <Switch>
                        <Route path="/search/:searchTerm">
                            <SearchPage />
                        </Route>
                        <Route path="/" exact>
                            <Videos />
                        </Route>
                    </Switch>
                </main>
            </Router>

            {/* <footer className="footer">footer</footer> */}
        </>
    );
}

export default App;
