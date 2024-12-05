import {Typography} from "@material-tailwind/react";
import {ImgWithCaption} from "@/Components/Image.jsx";
import pic5 from "@/img/pic5.jpg"
import HrefLink from "./HrefLink";
import TextBlock from "./TextBlock";
export default function AboutInfo(){
    return(

        <div className="text-lg w-full p-4 text-justify mb-3 text-white">
            <Typography variant="h3" className="text-center mb-4" color="white">
                Impardonné bemutatkozás
            </Typography>
            <ImgWithCaption src={pic5} caption={"S8 Tehetségkutató 2024 (Akkori felállás)"}/>


            <p className="mb-5 mt-5 ">
            Az Impardonné, egy Pest-vármegyei Alternatív-rock együttes, melynek megalakulásától kezdve az új dolgok alkotása volt a célja. A zenekar nagy hangsúlyt fektet az egyediségre, kevés másik zenekarhoz hasonlítható, azonban ha a stílust egy picivel jobban be szeretnénk lőni, valahol a Green Day, és a Guns N' Roses között kell keresnünk a megfejtést, persze egy hazai Alter ,,fröccsel" nyakonöntve.
            Az Impardonné megalakulásának célja eredetileg pusztán a zene szeretete volt, illetve az öröm, melyet a zenélés okozhat, ez azonban némineműleg átformálódott. A zene szeretete megmaradt, viszont társult hozzá egy mély mondanivaló is. Ehhez kapcsolódóan, a dalok szövegközpontúak, illetve többnyire melankólikusan, elgondolkodtatóak, mégis dallamosak maradtak. A szövegeket tekintve is dominál általában a szomorú, vagy épp filozófikus téma, mely többféleképpen értelmezhető, így a legtöbb ember azonosulni tud vele. Ha költőien szeretnénk fogalmazni, az Impardonné életszemlélet a tökéletesség, ezáltal a sors iróniáját emésztgeti, avagy egy pici jó a rosszban, egy pici rossz a jóban. Egy kifacsart, muslicarágta citrom, melyhez az embernek már nem lenne gusztusa. A zenekar szimbolikus színei a lila, és a fekete.
            A formáció 2023. Augusztus 20.-án kezdett koncertezni, amikor Gutorföldén, a Göcsej Moto-Rock fesztivál keretein belül a Pokolgép után sikerült színpadra lépniük. Ezt követően koncertsorozatok indultak országszerte (Budapest, Domonyvölgy, Lőrinci, Balassagyarmat, Kartal, Gyál, Baja, Gutorfölde, Gödöllő, Érd, Stb...) Kezdetben hullámzó nézettséget bírt a fiatal tagokból álló együttes, azonban mára már egyre több helyen megjelennek, figyelmet kapnak, és meredeken tör felszállóágba a zenekar népszerűsége. 2024 Tavaszán kiadták az első kislemezüket ,,Ahol a Végét Kezdenéd" címmel, amely négy számot foglalt magába. A kislemez kiadása után egyre több médiaplattformon kezdtek megjelenni (Rockpagoda TéWé, Fáklya Rádió, RTL Club stb...), és a koncertek, felkérések is sűrűsödtek. Jelenleg az 1. Nagylemez stúdiómunkálatai vannak folyamatban, mely 10 számot foglal majd magába.

            </p>
            <div className="text-center justify-center mb-10 mt-10">

            <Typography variant="h2" className="mb-5 mt-5"
                        >
                        Az Impardonné jelenlegi tagjai:

            </Typography>

            <TextBlock>
                <ul className="mb-5 mt-5">
                    <li>Darvasi Ivett Magdolna (Dob)</li>
                    <li>Maroevich Milán (Gitár, Webfejlesztő)</li>
                    <li>Rákóczi László (Basszusgitár)</li>
                    <li>Lados Péter (Billentű, Ének, Koncertszervező)</li>
                </ul>
            </TextBlock>

            <TextBlock>
                <Typography  variant="h2" className="mb-5 mt-5">Elérhetőségek:</Typography>
                <HrefLink href="tel:+36205269360">+36205269360</HrefLink>
                <HrefLink href="mailto:impardonne.band@gmail.com">impardonne.band@gmail.com</HrefLink>
                <HrefLink href="https://www.facebook.com/impardonnezenekar">https://www.facebook.com/impardonnezenekar</HrefLink>
                <HrefLink  href="https://youtube.com/@impardonne-us2zo?si=fgok3lJrtSNNzA5B">https://youtube.com/@impardonne-us2zo?si=fgok3lJrtSNNzA5B</HrefLink>
            </TextBlock>
            </div>
        </div>

    )
}
