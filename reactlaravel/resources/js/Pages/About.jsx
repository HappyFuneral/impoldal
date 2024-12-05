import { Head } from '@inertiajs/react';
import bg from '@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg';
import {Footer} from "@/Components/Footer.jsx";

import {NavbarDefault} from "@/Components/Navbar.jsx";

import AboutInfo from '@/Components/About';

export default function About() {

    return (
        <div
            className="bg-cover"
                             style={
                                 {backgroundImage : `url(${bg})`}}>
            <Head title="Főoldal"/>

            <NavbarDefault number={0}>
                <div className="bg-black/70">

                    <div className="flex justify-center w-full ">
                    <AboutInfo/>
                    </div>

                </div>
                <Footer></Footer>
            </NavbarDefault>
        </div>
    );
}
