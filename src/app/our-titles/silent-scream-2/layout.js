import FooterSS2 from "@/app/components/silentscream2page/FooterSS2";
import NavbarSS2 from "@/app/components/silentscream2page/NavbarSS2";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Studio-23",
  description: "A Game Studio",
};

export default function TestLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/studio_23_logo.svg" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
