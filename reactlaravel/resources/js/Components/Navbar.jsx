import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card, Badge,
} from "@material-tailwind/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.jsx";

export function NavbarDefault({children}) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >

            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    
                </a>
            </Typography>
        
        </ul>
    );

    return (
        <div className=" max-h-screen w-full overflow-scroll">
            <Navbar className="bg-black sticky rounded-none border-none top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-50">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <span id="title">Impardonné</span>
                    </Typography>
                    </div>
                    <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                     
                    </div>
                </MobileNav>
            </Navbar>



            {children}
        </div>
    );
}
