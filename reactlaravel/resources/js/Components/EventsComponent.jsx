import EventItem from "@/Components/EventItem.jsx";
import {Link} from "@inertiajs/react";
import {Button} from "@material-tailwind/react";

export default function Events({events}){
    return (
        <div className="bg-black rounded-md">

            {
                events.map(
                    event  => (<EventItem event={event}/>)
                )
            }
        </div>
    )

}
