import React, { useState } from "react";
import LoginPage from "./LoginPage";
import AboutUs from "./AboutUs";
import PersonalDetails from "./PersonalDetails";
import TrackSelection from "./TrackSelection";
import SkillSelection from "./SkillSelection";
import VideoRecommendations from "./VideoRecommendations";

function App() {
  const [page, setPage] = useState("login"); // State to track current page

  return (
    <div>
      {/* Navbar (Common for all pages) */}
      <div className="navbar">
        <h1 className="logo">⚡ Power Up</h1>
        <nav>
          <ul className="nav-links">
            <li onClick={() => setPage("about")}>ABOUT US</li>
            <li onClick={() => setPage("login")}>LOGIN</li>
          </ul>
        </nav>
      </div>

      {/* Render pages based on state */}
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "about" && <AboutUs setPage={setPage} />}
      {page === "personalDetails" && <PersonalDetails setPage={setPage} />}
      {page === "trackSelection" && <TrackSelection setPage={setPage} />}
      {page === "skillSelection" && <SkillSelection setPage={setPage} />}
      {page === "videoRecommendations" && <VideoRecommendations setPage={setPage} />}
    </div>
  );
}

export default App;
