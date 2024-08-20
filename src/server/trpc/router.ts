import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

let videoViews: Record<string, number> = {
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0
};

export const appRouter = t.router({
  getVideos: t.procedure.query(() => {
    return [
      { id: '1', title: 'Video de flores', src: '/videos/flores.mp4', image: '/images/flores.png' },
      // { id: '2', title: 'Viaje en tren', src: '/videos/viaje.mp4', image: '/images/tren.png'},
      // { id: '3', title: 'Bosque desde el dron', src: '/videos/bosque.mp4', image: '/images/bosque.png' },
      { id: '4', title: 'La luna de día', src: '/videos/luna.mp4', image: '/images/luna.png' },
      { id: '5', title: 'Mariposa', src: '/videos/mariposa.mp4', image: '/images/mariposa.png' }
    ];
  }),
  
  getVideoViews: t.procedure.query(() => {
    return videoViews;
  }),

  incrementVideoView: t.procedure.input((val: unknown) => {
    if (typeof val === "string") return val;
    throw new Error("Input invalido");
  }).mutation(({ input }) => {
    videoViews[input] = (videoViews[input] ?? 0) + 1;
    return videoViews[input];
  }),
});

export type AppRouter = typeof appRouter;
