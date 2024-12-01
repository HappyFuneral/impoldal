import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export function ContactForm() {
    return (
        <Card color="transparent"  className="items-center p-2 black" shadow={false}>
            <Typography variant="h4" color="white">
                Keress minket!
            </Typography>
            <Typography color="white" className="mt-1 font-normal text-justify">
                Ha kerestek egy zenekart fellépéshez vagy csak szimplán kérdésed van az Impardonnéhoz, akkor bátran írj nekünk, válaszolunk!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="white" className="-mb-3">
                        Tárgy
                    </Typography>
                        <Input color="white" label="Tárgy" />
                    <Typography variant="h6" color="white" className="-mb-3">
                        Email Cím
                    </Typography>
                    <Input
                        color={"white"}
                        label={"Email"}
                        placeholder={"email@gmail.com"}
                    />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="white"
                            className="flex items-center font-normal"
                        >
                            Elfogadom
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-purple-400"
                            >
                                &nbsp;Az adatvédelmi szabályzatot
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                    Tovább
                </Button>
            </form>
        </Card>
    );
}
