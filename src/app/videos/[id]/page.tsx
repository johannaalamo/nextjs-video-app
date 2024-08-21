'use client'

import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import { useParams, useRouter } from "next/navigation";
import { CommentsTable } from "@/components/CommentsTable";
import { VideosList } from "@/components/VideosList";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from 'react-icons/fa';

// import { ChevronLeft } from "lucide-react";

const VideoPage = () => {

    const params = useParams();
    const router = useRouter();
    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const { data: video, isLoading } = trpc.getVideos.useQuery(undefined, {
        select: (videos) => videos.find((v: any) => v.id === id),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!video) return <div>Video not found</div>;

    return (
        <div className="p-6 flex-col justify-center lg:flex-col md:flex-row">
            <div className="flex py-6 gap-3">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 align-middle text-slate-700"
                    onClick={() => router?.push('/')}
                >

                    <FaArrowLeft className="h-6 w-6 " />
                </Button>

                <h1 className="text-2xl font-medium align-middle ">VidextTube</h1>
            </div>


            <Card className="mx-11 p-5 bg-slate-900 border-2 border-slate-700">
                <CardHeader>
                    <CardTitle>{video?.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col justify-center gap-5">
                    {isLoading ? (
                        <div>Cargando...</div>
                    ) : (
                        <div className="flex-row justify-between gap-5 xl:flex-row lg:flex md:flex-col sm:flex-col">
                            <VideoPlayer
                                key={video?.id}
                                src={video?.src}
                                videoId={video?.id}
                            />
                            <VideosList />
                        </div>

                    )}
                    <div>
                        <CommentsTable />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default VideoPage;