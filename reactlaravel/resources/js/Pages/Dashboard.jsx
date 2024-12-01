import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import MusicPlayer from "@/Pages/MusicPlayer.jsx";

export default function Dashboard() {
    const places = usePage().props.places;
    const status = usePage().props.status;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {places.map(place =>(
                        <div>{place.name}</div>
                    ))}
                </h2>
            }
        >
            <Head title="Dashboard" />

        </AuthenticatedLayout>
    );
}

