import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo links">
          Dashboard
        </Link>
        <div className="header-right">
          <Link to="/CvGeneration" className="links">
            CV Generation
          </Link>
          <Link to="/CvListing" className="links">
            CV listing
          </Link>
          <Link to="/Creation" className="links">
            Creation
          </Link>
          <Link to="/View" className="links">
            Viewing
          </Link>
          <Link to="/Edit" className="links">
            Editing
          </Link>
        </div>
      </div>
    </div>
  );
};
