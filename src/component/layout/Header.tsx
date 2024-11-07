// import React from 'react';
// import Link from 'next/link';
// import {  Menu } from 'lucide-react'; // Assuming you're using lucide-react for the menu icon
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
// const Header: React.FC = () => {
//     return (
//         <header className="flex justify-between py-4 px-4 bg-gray-800 text-white  max-w-screen-2xl mx-auto mt-4 items-center">
//             <Link href="/" className="logo text-4xl font-bold text-pink-600">FR.</Link>
            
//             <nav>
//                 <ul className="hidden lg:block">
//                     <li className='space-x-5 py-4'>
//                         <Link href="/" className="mx-4 text-lg text-gray-300 hover:text-blue-400 active">Home</Link>
//                         <Link href="/about" className="mx-4 text-lg text-gray-300 hover:text-blue-400">About</Link>
//                         <Link href="/skills" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Skills</Link>
//                         <Link href="/services" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Services</Link>
//                         <Link href="/projects" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Projects</Link>
//                         <Link href="/contact" className="mx-4 text-lg text-gray-300 hover:text-blue-400">Contact</Link>
//                     </li>
//                 </ul>
//                 <Sheet>
//                     <SheetTrigger className="md:hidden">
//                         <Menu className="text-white" />
//                     </SheetTrigger>
//                     <SheetContent>
//                         <ul className="space-x-5 py-4">
//                             <li>
//                                 <Link href="/" className="block text-lg text-gray-600 hover:text-blue-400">Home</Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" className="block text-lg text-gray-600 hover:text-blue-400">About</Link>
//                             </li>
//                             <li>
//                                 <Link href="/skills" className="block text-lg text-gray-600 hover:text-blue-400">Skills</Link>
//                             </li>
//                             <li>
//                                 <Link href="/services" className="block text-lg text-gray-600 hover:text-blue-400">Services</Link>
//                             </li>
//                             <li>
//                                 <Link href="/projects" className="block text-lg text-gray-600 hover:text-blue-400">Projects</Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="block text-lg text-gray-600 hover:text-blue-400">Contact</Link>
//                             </li>
//                         </ul>
//                     </SheetContent>
//                 </Sheet>
//             </nav>
//         </header>
//     );
// };
// export default Header;






import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for the menu icon
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const Header: React.FC = () => {
    return (
        <header>
            <div className="flex justify-between py-4 px-4 bg-gray-800 text-white max-w-screen-2xl mx-auto mt-4 items-center overflow-hidden min-h-screen">
                <Link href="/" className="logo text-4xl font-bold text-pink-600">FR.</Link>
                <nav className="hidden lg:flex"> {/* Show only on large screens */}
                    <ul className="flex space-x-8"> {/* Add space-x-8 for spacing */}
                        <li>
                            <Link href="/" className="text-lg text-gray-300 hover:text-blue-400 active">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-lg text-gray-300 hover:text-blue-400">About</Link>
                        </li>
                        <li>
                            <Link href="/skills" className="text-lg text-gray-300 hover:text-blue-400">Skills</Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-lg text-gray-300 hover:text-blue-400">Services</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-lg text-gray-300 hover:text-blue-400">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-lg text-gray-300 hover:text-blue-400">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Sheet>
                    <SheetTrigger className="lg:hidden"> {/* Show hamburger menu only on medium screens and below */}
                        <Menu className="text-white" />
                    </SheetTrigger>
                    <SheetContent>
                        <ul className="space-y-4"> {/* Use space-y-4 for vertical spacing */}
                            <li>
                                <Link href="/" className="block text-lg text-gray-600 hover:text-blue-400">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="block text-lg text-gray-600 hover:text-blue-400">About</Link>
                            </li>
                            <li>
                                <Link href="/skills" className="block text-lg text-gray-600 hover:text-blue-400">Skills</Link>
                            </li>
                            <li>
                                <Link href="/services" className="block text-lg text-gray-600 hover:text-blue-400">Services</Link>
                            </li>
                            <li>
                                <Link href="/projects" className="block text-lg text-gray-600 hover:text-blue-400">Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block text-lg text-gray-600 hover:text-blue-400">Contact</Link>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;


