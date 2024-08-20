import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const appRouter = t.router({
  getVideos: t.procedure.query(() => {
    return [
      { id: '1', title: 'Video de flores', src: '/videos/flores.mp4' },
      { id: '2', title: 'Viaje en tren', src: '/videos/viaje.mp4' },
      { id: '3', title: 'Bosque desde el dron', src: '/videos/bosque.mp4' },
    ];
  }),
});

export type AppRouter = typeof appRouter;