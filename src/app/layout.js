import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Studio-23",
  description: "A Game Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/public/assets/studio_23_logo_.svg"
          sizes="any"
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
