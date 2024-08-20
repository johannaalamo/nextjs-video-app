'use client'

import VideoPlayer from "@/components/VideoPlayer";
// import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/utils/trpc";
import { useParams } from "next/navigation";

const VideoPage = () => {

    const params = useParams();

    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const { data: video, isLoading } = trpc.getVideos.useQuery(undefined, {
        select: (videos) => videos.find(v => v.id === id),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!video) return <div>Video not found</div>;

    return (
        <div className="p-6 flex justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>{video?.title}</CardTitle>
                    <CardDescription>{video?.title}</CardDescription>
                </CardHeader>

                <CardContent className="flex justify-center">
                    {isLoading ? (
                        <div>Cargando...</div>
                    ) : (
                        <VideoPlayer key={video?.id} src={video?.src} videoId={video?.id} />
                    )}
                </CardContent>

                <CardFooter>
                    <div className="video-list">

                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default VideoPage;

