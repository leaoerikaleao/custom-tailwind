import React from 'react'

const Index = () => {
    return (
        <div>
            {/* Navbar */}
            <header>
                <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
                    <div className="container flex items-center mx-auto">
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

            {/* Main */}
            <main>
                <div className="flex flex-col justify-center text-center bg-spotify-theme-mobile
                md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-purple-main
                text-green-main py-40 px-4">
                    <h1 className="text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none">
                        Escutar muda tudo
                    </h1>
                    <p className="text-md md:text-lg mb-10">Milhoes de músicas para explorar. E nem precisa de cartão de crédito.</p>
                    <a href="#" className="bg-green-main hover:bg-white text-purple-main text-sm rounded-full px-10 py-3 uppercase 
                    font-bold max-w-xl mx-auto tracking-widest transition duration-500 ">Obtenha o Spotify</a>
                </div>
            </main>

            {/* Footer */}
        </div>

    )
}

export default Index