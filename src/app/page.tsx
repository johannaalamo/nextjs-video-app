import { Card } from "@/components/ui/card"
import VideoList from "@/components/VideoList";

export default function Home() {

  const videos = [
    { id: '1', title: 'Video 1', description: 'Primer video.' },
    { id: '2', title: 'Video 2', description: 'Segundo video.' },
  ];

  return (

    <div>
      <Card>
      <VideoList videos={videos}/>
      </Card>
    </div>
  );
}
