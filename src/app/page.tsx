"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
  { id: "1", title: "Video de flores", src: "/videos/flores.mp4" },
  { id: "2", title: "Viaje en tren", src: "/videos/viaje.mp4" },
  { id: "3", title: "Bosque desde el dron", src: "/videos/bosque.mp4" },
];

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videos.length > 0 && !currentVideo) {
      setCurrentVideo(videos[0]);
    }
  }, [videos, currentVideo]);

  const handleVideoChange = (videoId: string) => {
    const selectedVideo = videos.find((video) => video.id === videoId);
    if (selectedVideo) {
      setLoading(true);
      setTimeout(() => {
        setCurrentVideo(selectedVideo);
        setLoading(false);
      }, 200);
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
            <VideoPlayer key={currentVideo.id} src={currentVideo.src} />
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