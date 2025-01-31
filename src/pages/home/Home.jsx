import React from "react";

import { Link } from "react-router-dom";

import "./home.scss";

// Components
import Startlist from "../../components/starlist/Starlist";

function Home() {
  return (
    <div className="home">
      {/* Add Task */}
      <div className="add_task">
        <h1 className="title">Add Taks</h1>
        <Link to="/add-task" className="link">+</Link>
      </div>
      {/* Star List */}
      <Startlist />
    </div>
  );
}

export default Home;
