import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import EditForm from "@/Pages/Dashboard/Events/Partials/EditForm.jsx";

export default function Edit({event}){
    return (
        <Authenticated>
            <EditForm event={event}/>
        </Authenticated>
    )
}
