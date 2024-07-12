import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Studio-23",
  description: "A Game Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/studio_23_logo.svg" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={poppins.className}>
        <div className="bg-gradient-to-t from-main_gradient_Color1 md:from-20% from-50% via-main_gradient_Color2 to-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
