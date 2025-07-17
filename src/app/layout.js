import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import NumberInputProcessor from "./NumberInputProcessor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calzone Pharmaceuticals",
  description: "Calzone Pharmaceuticals PVT LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NumberInputProcessor />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
