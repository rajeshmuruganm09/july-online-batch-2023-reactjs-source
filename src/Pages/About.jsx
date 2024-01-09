import { NavLink } from "react-router-dom";

export default function AboutPage(){
    return(
        
        <>
         <h1>About Page</h1>
         <NavLink to='/about/ceo'>CEO</NavLink> | <NavLink to='/about/coo'>COO</NavLink>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias similique corrupti debitis. Quam doloremque non impedit eaque fuga nobis, iusto ipsum ab? Quidem dolorum quae praesentium voluptatem quo! Nam, voluptate.</p>
        </>
    )
}