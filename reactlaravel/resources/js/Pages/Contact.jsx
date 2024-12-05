import { Head } from '@inertiajs/react';
import bg from '@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg';
import {Footer} from "@/Components/Footer.jsx";

import {NavbarDefault} from "@/Components/Navbar.jsx";

import { ContactForm } from '@/Components/ContactForm';

export default function Contact() {



    return (
        <div
            className="bg-cover"
                             style={
                                 {backgroundImage : `url(${bg})`}}>
            <Head title="Főoldal"/>

            <NavbarDefault number={0}>
                <div className="grid bg-black/70 h-screen items-center">
                    <div className="grid justify-center items-center w-full ">
                        <ContactForm></ContactForm>
                    </div>
                </div>
                <Footer></Footer>
            </NavbarDefault>
        </div>
    );
}
