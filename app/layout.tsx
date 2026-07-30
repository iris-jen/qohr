import type {ReactNode} from "react";
import {StoreProvider} from "./StoreProvider";
import {Nav} from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import {Provider} from "@/components/ui/provider";
import {Box, Image, Separator, Stack, Text} from "@chakra-ui/react";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (

    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body>

        <section>
            <Provider>
              <header>
                <Box width={"100%"} padding={"4"} className={styles.box_outside}>
                  <Stack>
                  <Nav />
                    <Separator/>
                  </Stack>
                </Box>
              </header>

              <main className={styles.main}>
               {children}
              </main>

              <footer className={styles.footer}>

                <Box>
                  <Image
                      src="/QOHR_Logo_C.png"
                      alt="logo"
                  />
                  <Text>
                    Copyright © QOHR - The Queer Online Health Resource 2026
                  </Text>
                </Box>
              </footer>
            </Provider>
          </section>
        </body>
      </html>
    </StoreProvider>

  );
}
