import FooterSS2 from "@/app/components/silentscream2page/FooterSS2";
import NavbarSS2 from "@/app/components/silentscream2page/NavbarSS2";
import { Inria_Serif } from "next/font/google";

const inria = Inria_Serif({ subsets: ["latin"], weight: "400" });

export default function SilentScream2Layout({ children }) {
  return (
    <html lang="en">
      <body className={inria.className}>
        <NavbarSS2 />
        {children}
      </body>
    </html>
  );
}
