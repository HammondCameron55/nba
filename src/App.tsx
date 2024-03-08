import { useState } from 'react'; // This is the useState hook that is being imported
import React from 'react'; // This is the main React library
import './App.css'; // This is the CSS file that is being imported
import CollegeBasketballTeams from './CollegeBasketballTeams.json'; // This is the JSON file that contains the list of teams

// This is a functional component that renders a welcome message to the screen
function Welcome() {
  return <h1>Welcome to Cameron Hammond's NBA March Maddness list.</h1>;
}

type TeamProps = {
  // This is a type definition for the props that the Team component will receive
  school: string;
  name: string;
  city: string;
  state: string;
};

// This is a class component that takes in the props defined above and renders them to the screen
class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>{this.props.school}</h2>
        <p>{this.props.name}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
      </div>
    );
  }
}

// This is a type definition for the CollegeBasketballTeams JSON file
type CollegeBasketballTeamsType = {
  teams: {
    school: string;
    name: string;
    city: string;
    state: string;
  }[];
};

// This is a functional component that renders a list of teams to the screen
function TeamList() {
  return (
    <div>
      {(CollegeBasketballTeams as CollegeBasketballTeamsType).teams.map(
        (teamNum) => (
          <Team {...teamNum} />
        ),
      )}
    </div>
  );
}

// this is the main component that is being rendered in the index.tsx file
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

// This is the default export of this file. It is the component that is being rendered in the index.tsx file
export default App;
