import FooterComp from "../Components/Footer/FooterComp";
import HeaderComp from "../Components/Header/HeaderComp";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
         <HeaderComp />
            <Outlet/>
         <FooterComp />
        </>
    )
}