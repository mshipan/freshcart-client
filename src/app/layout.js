import { poppins } from "@/utils/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "FreshCart: An Ecommerce Grocery",
  description: "FreshCart is An Ecommerce Grocery Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
