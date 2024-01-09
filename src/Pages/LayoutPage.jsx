import FooterComp from "../Components/Footer/FooterComp";
import HeaderComp from "../Components/Header/HeaderComp";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
         <HeaderComp />
         <h1>Layout of the React project</h1>
            <Outlet/>
         <FooterComp />
        </>
    )
}