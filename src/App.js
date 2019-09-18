import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorList";
import AuthorCard from "./AuthorCard";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <AuthorsList authors={authors} />
      </div>
    </div>
  );
}

export default App;
