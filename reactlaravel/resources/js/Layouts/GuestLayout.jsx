import ApplicationLogo from '@/Components/ApplicationLogo';
import {Head, Link} from '@inertiajs/react';
import {NavbarDefault} from "@/Components/Navbar.jsx";
import {Footer} from "@/Components/Footer.jsx";
import bg from "@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg";
import {CarouselDefault} from "@/Components/Carousel.jsx";
import Widget from "@/Components/Widget.jsx";

export default function Guest({ children }) {
    return (
        <div
            className="bg-cover "
            style={
                {backgroundImage : `url(${bg})`}}>
            <Head title="Főoldal"/>
            <NavbarDefault>
                <div className="grid bg-black/70 min-h-screen">
                    <div className="mx-auto w-3/4 grid justify-items-center py-10">{children}</div>
                    <Footer className="items-end"></Footer>
                </div>

            </NavbarDefault>
        </div>

    );
}
