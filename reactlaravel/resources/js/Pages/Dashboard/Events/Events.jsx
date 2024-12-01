import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import {EventsTable} from "@/Pages/Dashboard/Events/Partials/EventsTable.jsx";

export default function Events({events}){
    return (
        <Authenticated>
            <Head title="Események"></Head>
            {
                <EventsTable events={events} head={["Cím", "Jegyár", "Kezdés", "Végzés", "Státusz", ""]}/>
            }
        </Authenticated>
    )
}
