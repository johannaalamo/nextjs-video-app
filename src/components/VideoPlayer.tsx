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
    <div className="flex-col justify-items-center w-4/5">
      <video className="w-full" controls height="400px">
        <source src={src} type="video/mp4" />
      </video>
      <div className="my-3">
        <p className="text-xl">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoPlayer;

