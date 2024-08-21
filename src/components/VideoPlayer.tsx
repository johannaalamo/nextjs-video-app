import React, { useEffect, useRef, useState } from 'react';
import { trpc } from '@/utils/trpc';
import { Button } from './ui/button';

interface VideoPlayerProps {
  src: string;
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, videoId }) => {
  const { data: videoViews } = trpc.getVideoViews.useQuery();
  const incrementViewMutation = trpc.incrementVideoView.useMutation();
  const incrementLikeMutation = trpc.incrementVideoLike.useMutation();

  const [localLikes, setLocalLikes] = useState<number | null>(null);

  const hasIncrementedView = useRef(false);

  useEffect(() => {
    if (videoId && !hasIncrementedView.current) {
      incrementViewMutation.mutate(videoId);
      hasIncrementedView.current = true;
    }
  }, [videoId, incrementViewMutation]);

  useEffect(() => {
    if (videoViews && videoId) {
      setLocalLikes(videoViews[videoId]?.likes ?? 0);
    }
  }, [videoViews, videoId]);

  const handleLike = () => {
    incrementLikeMutation.mutate(videoId, {
      onSuccess: (newLikes) => {
        setLocalLikes(newLikes);
      },
    });
  };

  const viewCount = videoViews ? videoViews[videoId]?.views : 0;
  const likeCount = localLikes !== null ? localLikes : 0;

  return (
    
    <div className="flex-col justify-items-center w-4/5">
      <video src={src} controls />
      <div className='flex justify-between p-3'>
        <p className='text-xl'>{viewCount} views</p>
        <div className='flex'>
          <p className='mr-5 text-xl'>{likeCount} likes</p>
          <Button className="bg-slate-700 hover:bg-slate-400" onClick={handleLike}>
            👍
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;