import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorCard from "./AuthorCard";

function App(props) {
  const authorCards = this.props.authors.map(author => (
    <AuthorCard author={author} key={author.first_name} />
  ));
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <div className="authors">
            <h3>Authors</h3>
            <div className="row">
              
              <AuthorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
