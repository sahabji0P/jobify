import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Nav2 from "@/components/NavBar/nav2";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function RootLayout({ children }) {

  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${plusJakartaSans.className}`}>
          <NextTopLoader showSpinner={true} color="black" />
          {/* <NavBar user={JSON.parse(JSON.stringify(user))} /> */}
          <Nav2 user={JSON.parse(JSON.stringify(user))} />


          {children}

          <Toaster />


        </body>
      </html>
    </ClerkProvider>
  );
}


export default RootLayout;