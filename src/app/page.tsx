"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/utils/trpc";

const VideoGallery = () => {
  const { data: videos = [] } = trpc.getVideos.useQuery();
  const [loading, setLoading] = useState(false);

  const [currentVideo, setCurrentVideo] = useState(() => {
    if (typeof window !== 'undefined') {
      const hashVideoId = window.location.hash.slice(1);
      return videos.find(video => video.id === hashVideoId) || videos[0];
    }
    return videos[0];
  });

  useEffect(() => {
    const hashVideoId = window.location.hash.slice(1);
    if (hashVideoId) {
      const savedVideo = videos.find(video => video.id === hashVideoId);
      if (savedVideo) {
        setCurrentVideo(savedVideo);
      }
    } else if (videos.length > 0) {
      setCurrentVideo(videos[0]);
    }
  }, [videos]);

  const handleVideoChange = (videoId: string) => {
    const selectedVideo = videos.find(video => video.id === videoId);
    if (selectedVideo) {
      setCurrentVideo(selectedVideo);
      window.location.hash = videoId;
    }
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Video Gallery</CardTitle>
          <CardDescription>{currentVideo?.title}</CardDescription>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <VideoPlayer key={currentVideo?.id} src={currentVideo?.src} videoId={currentVideo?.id} />
          )}
        </CardContent>

        <CardFooter>
          <div className="video-list">
            {videos.map((video) => (
              <Button
                key={video.id}
                onClick={() => handleVideoChange(video.id)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                {video.title}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VideoGallery;