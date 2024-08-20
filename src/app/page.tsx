"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const VideoGallery = () => {
  const { data: videos = [] } = trpc.getVideos.useQuery();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-medium ">VidextTube</h1>
      <Separator className="my-4" />
      <p className="text-lg text-muted-foreground">
        ¡Bienvenido a VidextTube! Haz click en el video que quisieras ver
      </p>

      <div className="flex justify-center">
        <Carousel className="w-3/4 p-8">
          <CarouselContent className="-ml-1">
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="pl-5 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Link href={`/videos/${video.id}`}>
                    <Card className="cursor-pointer  hover:bg-slate-800">

                      <CardContent
                        style={{
                          backgroundImage: `url(${video.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '400px',
                        }} />

                      <CardFooter className="p-5">
                        <p className="text-lg">{video.title}</p>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default VideoGallery;