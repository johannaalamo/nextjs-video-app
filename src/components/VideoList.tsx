import React from 'react';
import Link from 'next/link';

interface Video {
    id: string;
    title: string;
    description?: string;
}

interface VideoListProps {
    videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
    return (
        <div className="video-list">
            {videos.map((video) => (
                <div key={video.id} className="video-item">
                    <Link href={`/video/${video.id}`}>

                        <h3>{video.title}</h3>
                        {video.description && <p>{video.description}</p>}

                    </Link>
                </div>
            ))}
        </div>
    );
};

export default VideoList;