import { trpc } from "@/utils/trpc";
import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, videoId }) => {
  const { data: videoViews } = trpc.getVideoViews.useQuery();
  const incrementViewMutation = trpc.incrementVideoView.useMutation();

  const hasIncremented = useRef(false);

  useEffect(() => {
    if (videoId && !hasIncremented.current) {
      incrementViewMutation.mutate(videoId);
      hasIncremented.current = true;
    }
  }, [videoId, incrementViewMutation]);

  const viewCount = videoViews ? videoViews[videoId] : 0;

  return (
    <div className="p-6 ">
      <video controls width="50%" height="500px">
        <source src={src} type="video/mp4" />
      </video>
      
      <p>{viewCount} views</p>
    </div>
  );
};

export default VideoPlayer;

