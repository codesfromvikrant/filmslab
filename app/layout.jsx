import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const source_sans_3 = Source_Sans_3({
//   weight: ["300", "400", "500", "700", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "FilmsLab",
  description: "Discover, Explore, and Dive into Movies & TV Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
