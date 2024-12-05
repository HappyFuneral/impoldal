import {Button} from "@material-tailwind/react";
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
        <div className="grid grid-rows-2 grid-flow-col py-5 gap-4 py-2 first:hover:bg-purple-600 hover:cursor-pointer last:border-none last:rounded-b-md first:bg-purple-800 first:rounded-t-md border-b-2 px-2 border-gray-900 hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 hover:bg-gray-900">
            <div className="flex items-center sm:row-span-2   ">
                <div className="md:mx-2 w-full text-center" >{formattedString}</div>
            </div>
            <div className="flex text-left  sm:row-span-2 lg:text-center  justify-center">
                <div className="lg:flex  justify-center">
                    <div className="md:mx-2 lg:w-1/3 text-purple-300 items-center " >{event.title}</div>
                    <div className="md:mx-2 lg:w-1/3 text-purple-200 items-center" ><FontAwesomeIcon icon={faMapMarker}/> {event.place} </div>
                    <div className="md:mx-2 lg:w-1/3 text-purple-100 items-center"  ><FontAwesomeIcon icon={faClock}/> {formattedStringStart+"-"+formattedStringEnd} </div>
                </div>

            </div>
            <div className="flex h-full row-span-2 justify-items-center items-center">

                <div className="flex mx-2 ">
                    {event.isCard ?
                        (<a href={event.ticketWebsite}><Button size="sm" className="py-4 px-3" color={"black"}>Jegyek</Button></a>)
                        : (<a href={""}><button size="sm" color={"black"}>Esemény részletei</button></a>)
                    }
                </div>
            </div>
        </div>

    )
}
