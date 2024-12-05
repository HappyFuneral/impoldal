import {Head} from '@inertiajs/react';
import {NavbarDefault} from "@/Components/Navbar.jsx";
import {Footer} from "@/Components/Footer.jsx";
import bg from "@/img/fb43f439-d7b9-458d-9190-cd7dc85699cd.jpg";


export default function Guest({ children }) {
    return (
        <div
            className="bg-cover "
            style={
                {backgroundImage : `url(${bg})`}}>
            <Head title="Főoldal"/>
            <NavbarDefault>
                <div className="grid bg-black/70 min-h-screen">
                    <div className="mx-auto sm:w-3/4 w-full grid justify-items-center py-10">{children}</div>
                    <Footer className="items-end"></Footer>
                </div>

            </NavbarDefault>
        </div>

    );
}
