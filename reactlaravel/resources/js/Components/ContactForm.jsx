import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { faMessage,faPhone,faUser,faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import HrefLink from "./HrefLink";
import TextBlock from "./TextBlock";
export function ContactForm() {
    const maintenance = true;
    return (
        {maintenance }?
            (

                <Card color="transparent"  className="items-center p-2 text-center black  w-96" shadow={false}>


                <TextBlock>
                    <Typography variant="h4" color="white" className="mb-10">
                        Keressen minket!
                    </Typography>
                    <Typography color="white" className="mt-1 font-normal text-justify">
                        Koncertszervezéssel, illetve bármi egyébbel kapcsolatban bátran írjon nekünk vagy hívjon minket telefonon!
                    </Typography>
                    <div className="flex text-justify">
                    <Typography as="a" href="mailto:impardonne.band@gmail.com" className="w-1/2 flex py-5 mx-2 mt-5 text-white text-3xl py-2 hover:cursor-pointer  px-2  hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 font-bold">
                    <span className="mx-2">Email</span>  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                    </Typography>
                    <Typography as="a" href="tel:+36205269360" className="w-1/2 justify-end flex py-5 mx-2 mt-5 text-white text-3xl py-2 hover:cursor-pointer  px-2  hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 font-bold">
                        <span className="mx-2">Telefon</span> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </Typography>
                    </div>
                    <div className="flex text-justify">
                    <Typography as="a" href="https://www.facebook.com/impardonnezenekar" className="w-1/2 flex py-5 mx-2 mt-5 text-white text-3xl py-2 hover:cursor-pointer  px-2  hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 font-bold">
                        <span className="mx-2">Facebook</span>  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </Typography>
                    <Typography as="a" href="https://youtube.com/@impardonne-us2zo?si=fgok3lJrtSNNzA5B" className="w-1/2 justify-end flex py-5 mx-2 mt-5 text-white text-3xl py-2 hover:cursor-pointer  px-2  hover:-translate-y-1 hover:scale-105 hover:rounded-md duration-300 font-bold">
                        <span className="mx-2">Youtube</span>  <FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>
                    </Typography>
                    </div>

                </TextBlock>
            </Card>
            )
            :
            (<Card color="transparent"  className="items-center p-2 black  w-80" shadow={false}>
                <Typography variant="h4" color="white" className="mb-10">
                    Keressen minket!
                </Typography>
                <Typography color="white" className="mt-1 font-normal text-justify">
                    Ha keres egy zenekart fellépéshez vagy csak szimplán kérdésed van az Impardonnéhoz, akkor bátran írjon nekünk, válaszolunk!
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg sm:w-96">
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
                    <Button title="Írjon emailt!" loading className="mt-6" fullWidth>
                        Nem múködik!
                    </Button>
                </form>
            </Card>)
        );}
