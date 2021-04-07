import React from 'react'

const Index = () => {
    return (
        // Navbar
        <header>
            <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
                <div class="container flex items-center mx-auto">
                    <div>
                        <a href="">
                            <img src="/img/spotify-logo.png" alt="" className="w-20 md:w-125px" />
                        </a>
                    </div>
                    <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className=" items-end flex-1 text-white font-bold hidden md:flex" >
                        <nav className="flex-1" >
                            <ul className="flex justify-end flex-1 ">
                                <li className="px-4">
                                    <a href="#" className="hover:text-hoverspt">Premium</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="hover:text-hoverspt">Ajuda</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="hover:text-hoverspt">Baixar</a>
                                </li>
                                <li className="px-4">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="hover:text-hoverspt">Inscrever-se</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="hover:text-hoverspt">Log In</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index