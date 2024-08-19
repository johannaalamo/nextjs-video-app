import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="video-player">
      <video controls width="50%" height="500px">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;