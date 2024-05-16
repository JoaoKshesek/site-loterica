"use client";
import StyledComponentsRegistry from "./registry";
import { Raleway } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={raleway.className}>
      <title>Signotech Web</title>
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
