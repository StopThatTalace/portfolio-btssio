import {Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Talace's portfolio",
  description: 'Web app created by @talace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={roboto.className}>
        <Header />
        {children}
        <Footer/>
    </body>
    </html>
  );
}
