import FooterSS2 from "@/app/components/silentscream2page/FooterSS2";
import NavbarSS2 from "@/app/components/silentscream2page/NavbarSS2";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function SilentScream2Layout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavbarSS2 />
        {children}
        <FooterSS2 />
      </body>
    </html>
  );
}
