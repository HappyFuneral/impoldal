import { Head } from '@inertiajs/react';
import bg from '@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg';
import {Footer} from "@/Components/Footer.jsx";

import {CarouselDefault} from "@/Components/Carousel.jsx";
import {NavbarDefault} from "@/Components/Navbar.jsx";
import Widget from "@/Components/Widget.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion ,events}) {

    let eventss = []
    events.map(
        event => (eventss.push(event))
    )

    return (
        <div
            className="bg-cover"
                             style={
                                 {backgroundImage : `url(${bg})`}}>
            <Head title="Főoldal"/>

            <NavbarDefault number={eventss.length}>
                <div className="bg-black/70">
                    <CarouselDefault></CarouselDefault>

                    <Widget events={eventss}/>
                </div>
                <Footer></Footer>
            </NavbarDefault>
        </div>
    );
}
