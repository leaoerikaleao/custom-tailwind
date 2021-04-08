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
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
                    <div className="md:col-span-1 pt-10 md:pt-4">
                        <a href="#">
                            <img src="/img/spotify-logo.png" alt="" className="w-20 md:w-132px" />
                        </a>
                    </div>
                    <div className="md:col-span-1 pt-10 md:pt-4">
                        <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
                            Empresa
                        </h3>
                        <ul>
                            <li className="mb-5">
                                <a href="#">Sobre</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Empregos</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">For the Record</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1 pt-10 md:pt-4">
                        <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
                            Comunidades
                        </h3>
                        <ul>
                            <li className="mb-5">
                                <a href="#">Para Artistas</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Desenvolvedores</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Publicidade</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Investidores</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Fornecedores</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1 pt-10 md:pt-4">
                        <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">
                            Links Úteis
                        </h3>
                        <ul>
                            <li className="mb-5">
                                <a href="#">Ajuda</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Player Web</a>
                            </li>
                            <li className="mb-5">
                                <a href="#">Aplicativo móvel grátis</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 pt-10 md:pt-4">
                        <ul className="flex md:justify-end">
                            <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full 
                            hover:text-green-main mx-2">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full 
                            hover:text-green-main mx-2">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full 
                            hover:text-green-main mx-2">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 mt-20">
                        <ul>
                            <li className="inline-block text-xs text-gray-600 mr-4">
                                <a href="#">Legal</a>
                            </li>
                            <li className="inline-block text-xs text-gray-600 mr-4">
                                <a href="#">Centro de Privacidade</a>
                            </li>
                            <li className="inline-block text-xs text-gray-600 mr-4">
                                <a href="#">Políticas de Privacidade</a>
                            </li>
                            <li className="inline-block text-xs text-gray-600 mr-4">
                                <a href="#">Cookies</a>
                            </li>
                            <li className="inline-block text-xs text-gray-600 mr-4">
                                <a href="#">Sobre Anúncios</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 mt-20">
                        <p className="flex justify-end text-gray-500 text-xs">&copy; 2020 Spotify AB</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Index