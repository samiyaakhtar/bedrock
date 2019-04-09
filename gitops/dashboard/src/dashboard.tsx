import * as React from 'react';
import "./assets/pipeline-proto.png";
import './css/dashboard.css';
import Git from './git';
import Kubernetes from './kubernetes';

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bedrock Visualization Dashboard Prototype</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.tsx</code> and save to reload. */}
        </p>
        <img src={require("./assets/pipeline-proto.png")}/>
        {this.renderGitCommits()}
        <Kubernetes />
      </div>
    );
  }

  public renderGitCommits() {
    return (
      <div className="commits">
        <div>
          App Commits <br />
          <Git user="samiyaakhtar" repo="containers-rest-cosmos-appservice-java" />
        </div>
        <div>
          HLD Commits <br />
          <Git user="samiyaakhtar" repo="jackson-source" />
        </div>
      </div>
    )
  }
}

export default Dashboard;
