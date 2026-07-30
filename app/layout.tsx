import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";


import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import {Provider} from "@/components/ui/provider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (

    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body>

          <section className={styles.container}>
            <Provider>


              <header className={styles.header}>
                <Nav />
              </header>

              <main className={styles.main}>
               {children}
              </main>

              <footer className={styles.footer}>

                  <Image
                      src="/QOHR_Logo_C.png"
                      alt="logo"
                      width={700}
                      height={10}
                  />

                Copyright © QOHR - The Queer Online Health Resource 2026
              </footer>
            </Provider>
          </section>
        </body>
      </html>
    </StoreProvider>

  );
}
