import Navbar from "@/components/Navbar";
import "./globals.css";
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata = {
  title: "SpaceShip WebSite",
  description: "develop by DearBoy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable}  bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
