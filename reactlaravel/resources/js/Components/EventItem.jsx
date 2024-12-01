import {Button} from "@material-tailwind/react";
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapMarker,faClock } from "@fortawesome/free-solid-svg-icons";

export default function EventItem({event}){

    const startDate = new Date(Date.parse(event.startDate));
    const endDate = new Date(Date.parse(event.endDate));
    // The locale and options for the Intl.DateTimeFormat object
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",

        timeZone: "UTC"
    };
    const options2 = {
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC"
    };
// Create a new Intl.DateTimeFormat() object with the locale and options
    const formatter = new Intl.DateTimeFormat("hu-HU", options);
    const formatter2 = new Intl.DateTimeFormat("hu-HU", options2);

    // Format the date object using the formatter
    const formattedString = formatter.format(startDate);
    const formattedStringStart = formatter2.format(startDate);
    const formattedStringEnd = formatter2.format(endDate);
    return (
        <div className="py-2 first:hover:bg-purple-600 hover:cursor-pointer last:border-none last:rounded-b-md first:bg-purple-800 first:rounded-t-md border-b-2 px-2 border-gray-900 hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 hover:bg-gray-900">
            <div className="flex h-12 w-full items-center  items-justify-center text-left p-2">
                <div className="mx-2 w-full" >{formattedString}</div>
            </div>
            <div className="my-2 flex justify-center lg:h-12 w-full text-center">
                <div className="lg:flex lg:w-1/2">
                    <div className="mx-2 lg:w-1/3 text-purple-300 " >{event.title}</div>
                    <div className="mx-2 lg:w-1/3 text-purple-200 " ><FontAwesomeIcon icon={faMapMarker}/> {event.place} </div>
                    <div className="mx-2 lg:w-1/3 text-purple-100 "  ><FontAwesomeIcon icon={faClock}/> {formattedStringStart+"-"+formattedStringEnd} </div>
                </div>
                <div className="lg:flex grid lg:w-1/2 justify-center">
                    <div className="lg:w-1/2 text-center">
                        {event.price} FT
                    </div>
                    <div className="mx-2 lg:w-1/2">
                        {event.is_card ?
                            (<Link href={event.ticket_website}><Button size="sm" color={"gray"}>Jegyekért katt</Button></Link>)
                            : (<Button size="sm"  disabled color={"gray"}>Helyszínen</Button>)
                        }
                    </div>
                </div>

            </div>
        </div>

    )
}
