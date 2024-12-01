import { Button, Typography } from "@material-tailwind/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import {ContactForm} from "@/Components/ContactForm.jsx";
import {ImgWithCaption} from "@/Components/Image.jsx";
import img from "@/img/img.jpg"
import Events from "@/Components/EventsComponent.jsx";
export function Widget({events}) {

    return (
        <section className="">
            <div className="p-5 rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">


                <div className="grid mb-5 text-white justify-items-center">
                    <div className="rounded-md text-sm w-3/4">
                        <Typography variant="h3" className="text-center mb-4" color="white">
                            Koncertek
                        </Typography>
                        <Events events={events}></Events>
                    </div>
                </div>

                <ContactForm/>
            </div>
        </section>
    );
}
export default Widget;
