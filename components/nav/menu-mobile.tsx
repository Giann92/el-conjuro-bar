import { cn } from "@/libs/utils";
import Menubar from "./menu";
import { FC } from "react";

interface MenuMobileProps{
    isOpen: boolean
    onClose: () => void;
}

const MenuMobile: FC<MenuMobileProps> = ({isOpen, onClose}) => {
    return(
        <>
        <div className={cn("fixed left-0 top-0 w-[35%] sn:w-[45%] h-full z-50 bg-black transition-all duretion-300 ease-in-out" , 
        !isOpen ? '-left-full' : 'left-0')}>
            <Menubar/>
        </div>
        <div 
        onClick={onClose}
        className={cn('fixed left-0 top-0 w-full bg-black/30 z-40', 
        !isOpen ? 'hidden' : 'block' )
        }/>
        </>
    );
};

export default MenuMobile;