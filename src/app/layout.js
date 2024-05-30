import { inter, poppins } from "@/utils/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "FreshCart: An Ecommerce Grocery",
  description: "FreshCart is An Ecommerce Grocery Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins} ${inter}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
