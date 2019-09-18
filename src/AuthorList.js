import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorsList(props) {
  const authors_list = props.authors.map(authors => {
    return <AuthorCard auth={authors} key={authors.first_name} />;
  });
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authors_list}</div>
      </div>
    </div>
  );
}
export default AuthorsList;
