// app/layout.tsx


import { IoMdHome } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AK Portfolio",
  description: "Personal Portfolio built using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex flex-col sm:flex-row sm:justify-between items-center     font-sans bg-blue-100 ">
          <div>
            <h2 className="italic text-violet-700 font-bold text-xl sm:ml-10">AK</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-16 text-sm sm:text-base">
            <Link href={"/"}>
              <div className="p-1 py-3 flex items-center justify-center cursor-pointer hover:bg-purple-700">
                <IoMdHome className="w-5 h-5" /> <span className="pl-1">Home</span>
              </div>
            </Link>

            <Link href={"/about"} className='pt-2 hover:bg-purple-700'>
              <div className="p-1 flex items-center justify-center cursor-pointer ">
                <BsPersonCircle className="w-5 h-5" /> <span className="pl-1">About</span>
              </div>
            </Link>

            <Link href={"/projects"} className='pt-2 hover:bg-purple-700'>
              <div className="p-1 flex items-center justify-center cursor-pointer ">
                <AiOutlineFundProjectionScreen className="w-5 h-5" /> <span className="pl-1">Projects</span>
              </div>
            </Link>

            <Link href={"/contact"} className='pt-2 hover:bg-purple-700'>
              <div className="p-1 flex items-center justify-center cursor-pointer ">
                <MdOutlineContactPage className="w-5 h-5" /> <span className="pl-1">Contact</span>
              </div>
            </Link>

          </div>
        </nav>

        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="">
          <div className='flex flex-col   md:flex-row  md:justify-between p-2 
        text-white bg-black w-full'>
            <div className="text-center">
              made with love by AK
            </div>
            <div className="text-center">
              copyright &#169; 2025
            </div>
            <div className="text-center">
              <Link href={'mailto:abdulkadiruk06@gmail.com'} className='px-2 hover:underline'>gmail</Link>
              <Link href={'https://github.com/abdul-kadir-uk'} className='px-2 hover:underline'>github</Link>
              <Link href={'https://www.linkedin.com/in/abdul-kadir-110948245/'} className='px-2 hover:underline'>Linkdin</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
