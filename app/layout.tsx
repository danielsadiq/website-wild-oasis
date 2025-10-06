import Logo from "@/app/components/Logo";
import Navigation from "@/app/components/Navigation";
import "@/app/styles/globals.css";

import {Josefin_Sans} from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap",
})

export const metadata = {
  title: {
    template: "%s | Wild Oasis",
    default: "Welcome | Wild Oasis"
  },
  description: "Luxurious Cabin Hotels",
};

console.log(josefin)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} p-6 bg-primary-950 min-h-screen text-primary-100`}>
        <div className="flex flex-col gap-6">
          <Logo/>
          <Navigation/>
          <main>{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
