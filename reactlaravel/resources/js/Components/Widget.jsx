import { Button, Typography } from "@material-tailwind/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import {ContactForm} from "@/Components/ContactForm.jsx";
import {ImgWithCaption} from "@/Components/Image.jsx";
import img from "@/img/img.jpg"
import Events from "@/Components/EventsComponent.jsx";
import SpotifyEmbed from "./SpotifyEmbed";
export function Widget({events}) {

    return (
        <section className="">
            <div className="p-2 rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">


                <div className="grid mb-5 text-white justify-items-center">
                    <div className="rounded-md text-sm md:w-3/5  w-full md:px-0 px-5">

                    <Typography  id="intro" variant="h3" className="text-center mb-10 md:mt-10 mt-20" color="white">
                            Bevezető
                        </Typography>
                        <div className="md:px-20 px-10 md:text-2xl text-lg text-justify md:mt-20 mt-10 mb-5 md:mb-10">
                        Üdv az Impardonné hivatalos honlapján!
                        Az Impardonné egy Pest vármegyei, újkeletű Alternatív-Rock zenekar, melynek célja már a megalakulás óta az új dolgok alkotása. Nagy hangsúlyt fektetünk az egyediségre, viszont igyekszünk olyan dalokat alkotni, melyeket bárki átérezhet, és megtalálja benne a neki szánt mondanivalót, üzenetet.
                        </div>
                       <Typography variant="h3" className="text-center mb-10 mt-20" color="white">
                            Kislemez
                        </Typography>
                        <SpotifyEmbed/>
                        <Typography variant="h3" className="text-center mb-10" color="white">
                            Koncertek
                        </Typography>

                        <Events events={events}></Events>
                        <div className="grid items-center justify-center w-full">
                            <ContactForm></ContactForm>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
export default Widget;
