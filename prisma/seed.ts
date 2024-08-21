const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const videoData = [
    { id: '1', title: 'Video de flores', src: '/videos/flores.mp4', image: '/images/flores.png' },
    { id: '2', title: 'Viaje en tren', src: '/videos/viaje.mp4', image: '/images/tren.png' },
    { id: '3', title: 'Bosque desde el dron', src: '/videos/bosque.mp4', image: '/images/bosque.png' },
    { id: '4', title: 'La luna de día', src: '/videos/luna.mp4', image: '/images/luna.png' },
    { id: '5', title: 'Mariposa', src: '/videos/mariposa.mp4', image: '/images/mariposa.png' },
  ];

  for (const video of videoData) {
    await prisma.video.upsert({
      where: { id: video.id },
      update: {},
      create: {
        id: video.id,
        title: video.title,
        src: video.src,
        image: video.image,
        views: 0,
      },
    });
  }

  console.log('Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
