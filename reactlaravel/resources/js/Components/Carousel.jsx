import {Button, Carousel, Typography} from "@material-tailwind/react";
import pic1 from "@/img/pic1.jpg";
import pic2 from "@/img/pic2.jpg";
import pic3 from "@/img/pic3.jpg";
import pic4 from "@/img/pic4.jpg";
import pic5 from "@/img/pic5.jpg"
import {Link} from "@inertiajs/react";
import React from "react";
export function CarouselDefault() {

    return (

        <div className="h-screen">
            <div className="relative h-full w-full">
                <img
                    src={`${pic1}`}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 ">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl duration-500"
                        >
                            Impardonné
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 "
                        >
                            Egy életérzés, amit a zene világán keresztül adunk át!
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link href="#intro">
                                <Button size="lg" color="white">
                                    Fedezd fel
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
