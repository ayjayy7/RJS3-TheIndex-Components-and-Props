import React from "react";
import authors from "./data";

function AuthorList() {
    
   return (
    <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                  <div className="image">
                    <img
                      className="card-img-top img-fluid"
                      src={authors[0].imageUrl}
                      alt={this.props.authords}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>
                        {authors[0].first_name + " " + authors[0].last_name}
                      </span>
                    </h5>
                    <small className="card-text">
                      {authors[0].books.length} books
                    </small>
                  </div>
                </div>
              </div>
   );
}
export default AuthorList;