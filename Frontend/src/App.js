import React, { useState } from "react";
import LoginPage from "./LoginPage";
import AboutUs from "./AboutUs";
import PersonalDetails from "./PersonalDetails";
import TrackSelection from "./TrackSelection";
import SkillSelection from "./SkillSelection";
import VideoRecommendations from "./VideoRecommendations";
import QuizPage from "./QuizPage";
import FinalPage from "./FinalPage"; // Import Final Page

import "./App.css";

function App() {
  const [page, setPage] = useState("login"); // Default starts with LoginPage

  return (
    <div>
      {/* Hide Navbar on Final Page */}
      {page !== "finalPage" && (
        <div className="navbar">
          <h1 className="logo">⚡ Power Up</h1>
          <nav>
            <ul className="nav-links">
              <li onClick={() => setPage("about")}>ABOUT US</li>
              <li onClick={() => setPage("login")}>LOGIN</li>
            </ul>
          </nav>
        </div>
      )}

      {/* Page Rendering Based on State */}
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "about" && <AboutUs setPage={setPage} />}
      {page === "personalDetails" && <PersonalDetails setPage={setPage} />}
      {page === "trackSelection" && <TrackSelection setPage={setPage} />}
      {page === "skillSelection" && <SkillSelection setPage={setPage} />}
      {page === "videoRecommendations" && <VideoRecommendations setPage={setPage} />}
      {page === "quizPage" && <QuizPage setPage={setPage} />}
      {page === "finalPage" && <FinalPage />} {/* Final Page - No Navbar */}
    </div>
  );
}

export default App;
