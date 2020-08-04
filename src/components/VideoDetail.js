import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h4>Loading...</h4>;
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={src} title="video player" />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
