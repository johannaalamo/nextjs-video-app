'use client'

import VideoPlayer from "@/components/VideoPlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import { useParams, useRouter } from "next/navigation";
import { CommentsTable } from "@/components/CommentsTable";
import { VideosList } from "@/components/VideosList";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const VideoPage = () => {

    const params = useParams();
    const router = useRouter();
    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const { data: video, isLoading } = trpc.getVideos.useQuery(undefined, {
        select: (videos) => videos.find(v => v.id === id),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!video) return <div>Video not found</div>;

    return (
        <div className="p-6 flex-col justify-center">

            <div className="flex py-6 gap-3">
                <Button 
                variant="outline" 
                size="icon" 
                className="h-7 w-7 align-middle"
                onClick={() => router.push('/')}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="text-2xl font-medium align-middle ">VidextTube</h1>
            </div>


            <Card>
                <CardHeader>
                    <CardTitle>{video?.title}</CardTitle>
                    <CardDescription>{video?.title}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-center gap-5">
                    {isLoading ? (
                        <div>Cargando...</div>
                    ) : (
                        <div className="flex justify-center gap-5">
                            <VideoPlayer
                                key={video?.id}
                                src={video?.src}
                                videoId={video?.id}
                            />
                            <VideosList />
                        </div>

                    )}
                    <div className="">
                        <CommentsTable />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default VideoPage;

