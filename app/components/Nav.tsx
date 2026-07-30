"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import styles from "../styles/layout.module.css";
import {Box} from "@chakra-ui/react";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
                href="/">
                Home
            </Link>
        </Box>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${
                    pathname === "/wiki" ? styles.active : ""
                }`}
                href="/wiki"
            >
                Wiki
            </Link>
        </Box>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${
                    pathname === "/contact" ? styles.active : ""
                }`}
                href="/contact"
            >
                Contact
            </Link>
        </Box>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${
                    pathname === "/about" ? styles.active : ""
                }`}
                href="/about"
            >
                About
            </Link>
        </Box>
    </nav>
  );
};
