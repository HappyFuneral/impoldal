import { Head } from '@inertiajs/react';
import bg from '@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg';
import {Footer} from "@/Components/Footer.jsx";

import {CarouselDefault} from "@/Components/Carousel.jsx";
import {NavbarDefault} from "@/Components/Navbar.jsx";
import Widget from "@/Components/Widget.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion ,events}) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

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
                    <div className="flex justify-center w-full ">
                        <iframe src="https://www.boomplay.com/embed/86096083/COL" className="mt-7 mb-4" width="80%" height="600" frameBorder="0"></iframe>
                    </div>
                    
                    <Widget events={eventss}/>
                </div>
                <Footer></Footer>
            </NavbarDefault>
        </div>
    );
}
