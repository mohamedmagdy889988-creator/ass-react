    import { useEffect, useState } from "react"
    import { Link, NavLink } from "react-router-dom"

    function Navbar() {
        const [isScrolling, setScrolling] = useState(false);
        const handleUserScroll = () => {
            if (window.scrollY > 35) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        }

        useEffect(() => {
            window.addEventListener("scroll", handleUserScroll);
        }, []);

        return (
            <nav className={`${isScrolling ? 'py-4' : "py-8"} bg-secandary transition-[padding] duration-500 text-white py-4 px-12 fixed  top-0 left-0 right-0`}>
                <div className="container flex items-center justify-between">
                    <h2 className="font-bold text-4xl uppercase">
                        <Link to={"/"}>
                            Start FrameWork
                        </Link>
                    </h2>
                    <ul className="center">
                        <li>
                            <NavLink to={"about"} className={'uppercase font-bold p-2'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"portfolio"} className={'uppercase font-bold p-2'}>
                                Portfolio
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to={"contact"} className={'uppercase font-bold p-2'}>
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    export default Navbar