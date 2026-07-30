"use client";
import {usePathname} from "next/navigation";
import styles from "../styles/layout.module.css";
import {Box, Center, Link} from "@chakra-ui/react";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>

        <Box className={styles.box_primary}>
            <Center>
            <Link
                className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
                href="/">
                Home 🏠
            </Link>
            </Center>
        </Box>

        <Box className={styles.box_primary}>
            <Center>
                <Link
                    className={`${styles.link} ${
                        pathname === "/wiki" ? styles.active : ""
                    }`}
                    href="/wiki"
                >
                    Wiki 📚
                </Link>
            </Center>

        </Box>

        <Box className={styles.box_primary}>
            <Center>
            <Link
                className={`${styles.link} ${
                    pathname === "/contact" ? styles.active : ""
                }`}
                href="/contact"
            >
                Contact 📧
            </Link>
            </Center>
        </Box>
    </nav>
  );
};