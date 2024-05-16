"use client";
import StyledComponentsRegistry from "./registry";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Footer, Header } from "@/components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <title>Signotech Web</title>
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
