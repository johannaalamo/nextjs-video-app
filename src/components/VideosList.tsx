import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { trpc } from "@/utils/trpc";
import Link from "next/link";
import Image from 'next/image';

export const VideosList = () => {
    const { data: videos = [], isLoading } = trpc.getVideos.useQuery();

    if (isLoading) return <div>Loading...</div>;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Videos</CardTitle>
                <CardDescription>
                    Aquí puedes gestionar tus videos y ver su rendimiento.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableBody>
                        {videos.map((video) => (
                            <TableRow key={video.id}>
                                <Link href={`/videos/${video.id}`}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Image alt={video.title} className="aspect-square rounded-md object-cover" height="64" src={video.image} width="64" />
                                    </TableCell>

                                    <TableCell className="font-medium">
                                        {video.title}
                                    </TableCell>
                                </Link>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Mostrando <strong>{videos.length}</strong> videos
                </div>
            </CardFooter>
        </Card>
    );
};
