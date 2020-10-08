import React, { Component } from 'react';

import './App.css';

class App extends Component {

  render() {
    

    return (
      <div className="App">
        <header className="Header">
          <h2>Jonatha Franklin</h2>
          <address>586 Highland Ave.</address>
          <address>Penngrove, CA, 94951</address>
        </header>
        <main>
          <section className="education">
            <p>M.A. English, University of Waterloo</p>
            <p>B.A. Philosophy, University of Belgium</p>
          </section>
          <section className="experience">
            <p>White House Policy Analyst</p>
            <p>Jan 2016-present</p>
          </section>
          <section className="projects">
            <p>Borderlands Policy Report, 2020-2024</p>
            <p>Immmigration Documentary, 2017</p>
          </section>
        </main>

      </div>
    );

  }
  
};

export default App;
