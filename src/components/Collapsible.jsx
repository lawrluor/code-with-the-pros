import React, { useState, useEffect } from "react";
import { IoChevronUpSharp, IoChevronForwardSharp } from "react-icons/io5";
import { trackChallenge } from "../firebase";

export default function Collapsible({ title = "Challenge", onClick = () => { }, children, section, number }) {
  const [shown, setShown] = useState(false);
  const [tracked, setTracked] = useState(false);

  // Extract challenge number from siblings if not provided
  useEffect(() => {
    // Only run this once per component
    if (!tracked && shown && title.includes("Challenge")) {
      const action = "challenge_opened";
      trackChallenge(action, {
        challengeNumber: number || "unknown",
        challengeTitle: title,
        section: section || document.title || "unknown",
        visible: true
      });
      setTracked(true);
    }
  }, [shown, title, number, section, tracked]);

  const handleToggle = () => {
    onClick();  // call parent function 

    const newShownState = !shown;
    setShown(newShownState);

    // Track when a challenge is closed
    if (tracked && !newShownState && title.includes("Challenge")) {
      trackChallenge("challenge_closed", {
        challengeNumber: number || "unknown",
        challengeTitle: title,
        section: section || document.title || "unknown",
        visible: false
      });
    }
  };

  return (
    <div className="collapsible">
      <div
        className="pointer"
        style={{ display: "flex", alignItems: "center" }}
        onClick={handleToggle}
      >
        <h5>{shown ? "Hide" : "View"} {title}</h5>
        <h5 style={{ marginLeft: 2 }}> {shown ? <IoChevronUpSharp /> : <IoChevronForwardSharp />}</h5>
      </div>
      {shown && <div className="collapsible-content" style={{ backgroundColor: "#262626", padding: "2px 10px", margin: "10px 0px" }}>{children}</div>}
    </div>
  );
}