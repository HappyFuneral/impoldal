import { Divide } from "iconoir-react";

export function Up({children}){

    return (
        <div className="hover:animate-spin hover:-translate-y-10 duration-200 ">
            {children}
        </div>
    );
}
export function Down({children}){
    return (
        <div className="hover:animate-spin hover:translate-y-10  duration-200">
            {children}
        </div>
    );
}
