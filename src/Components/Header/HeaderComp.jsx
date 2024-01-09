import './Header.css'
import { Link, NavLink } from 'react-router-dom'
export default function HeaderComp() {
    return (
        <>
            <div className="ns">
                <div>
                    LOGO
                </div>

                <div>
                    {/* <nav>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/about"><li>About</li></a>
                            <a href="/blog"><li>Blog</li></a>
                            <a href="/portfolio"><li>Portfolio</li></a>
                            <a href="contact"><li>Contact</li></a> 
                        </ul>
                    </nav>
                    <br/>

                    <nav>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/blog"><li>Blog</li></Link>
                            <Link to="/portfolio"><li>Portfolio</li></Link>
                            <Link to="contact"><li>Contact</li></Link>
                        </ul>
                    </nav>
                    <br/> */}

                    <nav>
                        <ul>
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/about"><li>About</li></NavLink>
                            <NavLink to="/blog"><li>Blog</li></NavLink>
                            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
                            <NavLink to="contact"><li>Contact</li></NavLink>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}