import React from "react";
import { useLocation } from "react-router-dom";

const DownloadAvatarPage = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;

  return (
    <div>
      <h2>Download Avatar</h2>
      {videoUrl ? (
        <div className="video-container">
          <h3>Here is your avatar video:</h3>
          <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
            <track default kind="captions" srcLang="en" src="" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p>No video available.</p>
      )}
    </div>
  );
};

export default DownloadAvatarPage;
