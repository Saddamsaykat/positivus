const Footer = () => {
    return (
        <footer className="bg-[#1E1E2D] text-gray-300 py-10 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-col space-y-8">
                
                <div className="flex flex-col lg:flex-row justify-between items-center pb-6 border-b border-gray-700 space-y-4 lg:space-y-0">
                    
                    <div className="flex items-center space-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#3D82F6"/>
                            <path d="M12 4.5L4.5 12L12 19.5L19.5 12L12 4.5Z" fill="#EBF4FF"/>
                        </svg>
                        <span className="text-xl font-bold text-white">Positivus</span>
                    </div>

                    <nav className="flex flex-wrap justify-center lg:flex-nowrap space-x-4 md:space-x-8 text-base font-semibold">
                        <a href="#" className="hover:text-white transition-colors">About us</a>
                        <a href="#" className="hover:text-white transition-colors">Services</a>
                        <a href="#" className="hover:text-white transition-colors">Use Cases</a>
                        <a href="#" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors p-2 bg-[#2C2C3F] rounded-full">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors p-2 bg-[#2C2C3F] rounded-full">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors p-2 bg-[#2C2C3F] rounded-full">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c-.031.014-.061.028-.092.042 1.35.817 2.94 1.258 4.602 1.258 4.61 0 8.406-3.796 8.406-8.406 0-.129-.002-.257-.006-.385.575-.417 1.074-.933 1.47-1.516-.525.234-1.088.391-1.69.46-.492-.524-1.196-.85-1.99-.85-.98 0-1.77.79-1.77 1.77 0 .139.016.273.046.401-1.47-.07-2.775-.777-3.65-1.85-.15.258-.235.55-.235.864 0 .612.311 1.15.783 1.468-.458-.015-.888-.14-1.26-.348-.002.007-.002.016-.002.025 0 1.928 1.372 3.535 3.193 3.9-.334.09-.686.136-1.05.136-.256 0-.505-.025-.747-.07.508 1.58 1.972 2.731 3.715 2.805-1.36.995-3.076 1.588-4.945 1.588-.323 0-.64-.019-.953-.054.492 1.62 1.866 2.81 3.49 3.064-.09-.044-.183-.092-.275-.14zm2.176-13.633c.961-.68 1.554-1.614 1.775-2.67.653 1.109 1.144 2.318 1.47 3.606.336 1.31.515 2.67.515 4.07 0 .285-.008.57-.024.852.128-.035.257-.066.385-.1.18-.04.354-.085.526-.134.613-.178 1.16-.44 1.646-.777-.557.25-1.143.418-1.76.495.642-.385 1.134-1.013 1.365-1.758-.596.353-1.25.608-1.95.748-.6.12-1.21.182-1.828.182-.87 0-1.66-.196-2.39-.56C8.84 8.71 8.24 7.68 8.24 6.49c0-.422.062-.83.18-1.217.652.81 1.42 1.503 2.298 2.072 0 .002.002.002.002.004z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start py-8">
                    <div className="flex flex-col space-y-4">
                        <div className="bg-[#B9FF66] text-[#1E1E2D] px-4 py-2 rounded-md text-sm font-semibold inline-block self-start">
                            Contact us
                        </div>
                        <p className="text-sm">Email: info@positivus.com</p>
                        <p className="text-sm">Phone: 555-567-8901</p>
                        <p className="text-sm">Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
                    </div>

                    <div className="bg-[#2C2C3F] p-6 rounded-xl shadow-md flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-grow p-3 rounded-md bg-[#3F3F56] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3D82F6] text-white placeholder-gray-400 w-full sm:w-auto"
                            />
                            <button className="bg-[#B9FF66] text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-[#a3eb55] transition-colors w-full sm:w-auto">
                                Subscribe to news
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700" />
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0 pt-4">
                    <p>&copy; {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;