import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reports",
  description: "These are the reports from last 30 days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-[95vw] mx-auto box-border shadow-2xl min-h-fit mb-8 shadow-gray-600`}
      >
        {children}
      </body>
    </html>
  );
}
