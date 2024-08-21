import { initTRPC } from '@trpc/server';
import prisma from '@/lib/prisma';

const t = initTRPC.create();

export const appRouter = t.router({
  getVideos: t.procedure.query(async () => {
    return await prisma.video.findMany();
  }),

  getVideoViews: t.procedure.query(async () => {
    const videos = await prisma.video.findMany();
    
    const videoViews: Record<string, { views: number; likes: number }> = {};

    videos.forEach((video: any) => {
      videoViews[video?.id] = {
        views: video?.views,
        likes: video?.likes,
      };
    });

    return videoViews;
  }),

  incrementVideoView: t.procedure.input((val: unknown) => {
    if (typeof val === "string") return val;
    throw new Error("Input inválido");
  }).mutation(async ({ input }) => {
    const video = await prisma.video.update({
      where: { id: input },
      data: { views: { increment: 1 } },
    });
    return video.views;
  }),

  incrementVideoLike: t.procedure.input((val: unknown) => {
    if (typeof val === "string") return val;
    throw new Error("Input inválido");
  }).mutation(async ({ input }) => {
    const video = await prisma.video.update({
      where: { id: input },
      data: { likes: { increment: 1 } },
    });
    return video.likes;
  }),
});

export type AppRouter = typeof appRouter;
