import {Button, Card, Checkbox, Input, Select, Typography} from "@material-tailwind/react";
import {useState} from "react";
import {usePage} from "@inertiajs/react";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption.js";


export default function EditForm({event}) {
    const places = usePage().props.places;
    const status = usePage().props.status;
    const [values, setValues] = useState(
        {
            'title': event.title,
            'startDate': event.startDate,
            'endDate': event.endDate,
            'description': event.description,
            'status': event.status,
            'date': event.date,
            'place_id': event.place_id,
            'is_card': event.is_card,
            'ticket_website': event.ticket_website,
            'price': event.price
        }
    )


    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    return (
        <Card color="transparent"  className="items-center p-2 black" shadow={false}>
            <Typography variant="h4" color="white">
                {event.title}
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
                Ha kerestek egy zenekart fellépéshez vagy csak szimplán kérdésed van az Impardonnéhoz, akkor bátran írj nekünk, válaszolunk!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={route('events.update',["event" , values])}>
                <div className="mb-1 flex flex-col gap-6">

                    <Input color="white" name="title" label="Cím" value={event.title} onChange={handleChange}/>
                    <Input color="white" name="startDate" type="datetime-local"  value={event.startDate} onChange={handleChange} label="Kezdés"/>
                    <Input color="white" name="endDate" type="datetime-local" value={event.endDate} onChange={handleChange} label="Végzés"/>
                    <Select color="white" label="Hely" name="place" onChange={handleChange}>
                        {places.map(place =>(

                            <SelectOption value={place.id} className="bg-black" selected= {place.id === event.place_id}>{place.name}</SelectOption>
                        ))}
                    </Select>
                    <Select color="white" label="Státusz" name="status"  onChange={handleChange}>
                        {status.map(stat =>(
                            <SelectOption className="bg-black" value={stat} selected={stat === event.status}>{stat}</SelectOption>
                        ))}
                    </Select>
                    <Checkbox color="white" name="is_card" label="Kártyás-e" onChange={handleChange} checked={event.is_card}/>
                    <Input color="white" className={event.is_card ? "" : "hidden" } onChange={handleChange} name="ticket_website" label="Jegy webhelye" />
                    <Input color="white" label="Jegyár" value={event.price} onChange={handleChange}/>
                    <Input color="white" name="description" type="text" className="" label="Leírás" value={event.description} onChange={handleChange}/>

                </div>
                <Button className="mt-6 bg-gray-800" fullWidth>
                    Modosítás
                </Button>
            </form>
        </Card>

    );
}
