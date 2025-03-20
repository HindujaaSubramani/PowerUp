import React, { useEffect } from "react";
import "./FinalPage.css"; // Import CSS for styling

const FinalPage = () => {
  useEffect(() => {
    const confettiContainer = document.querySelector(".final-page-container");

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confettiContainer.appendChild(confetti);
    }

    for (let i = 0; i < 5; i++) {
      const firework = document.createElement("div");
      firework.className = "firework";
      confettiContainer.appendChild(firework);
    }
  }, []);

  return (
    <div className="final-page-container">
      <h1 className="final-page-title">🎉 Congratulations! 🎉</h1>
      <p className="final-page-quote">
        "The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt
      </p>
      <p className="message">
        All the very best for your future! Thank you for accompanying us on this learning journey. 🚀
      </p>

      <button className="final-page-button" onClick={() => window.location.href = "/"}>
        Go to Home
      </button>
    </div>
  );
};

export default FinalPage;
