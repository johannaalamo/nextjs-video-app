import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import React from "react";

export const CommentsTable = () => {
    return (
        <Card x-chunk="dashboard-01-chunk-5" className="border-2 border-slate-700 w-full">
            <CardHeader>
                <CardTitle>Comentarios</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">

                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Muy buen video!!
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">

                        <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Jackson Lee
                        </p>
                        <p className="text-sm text-muted-foreground">
                            ¡Qué maravilla!
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">

                        <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Un comentario con hate
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">

                        <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Sofia Davis
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Primer comentario
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}