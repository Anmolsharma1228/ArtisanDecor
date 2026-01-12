import "./globals.css";
import {Palyfair_Display, Playfair, Playfair_Display} from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const playfair_display = Playfair_Display({
  subsets: ["latin"]
})

export const metadata ={
  title: "Artisan Decor",
  MdDescription: "Premium interior décor solutions",
  icon:{
    icon: "/favicon.ico"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
