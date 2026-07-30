"use client";


import {usePathname} from "next/navigation";

import styles from "../styles/layout.module.css";
import {Box, Link} from "@chakra-ui/react";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
                href="/">
                Home 🏠
            </Link>
        </Box>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${
                    pathname === "/wiki" ? styles.active : ""
                }`}
                href="/wiki"
            >
                Wiki 📚
            </Link>
        </Box>

        <Box className={styles.box_primary}>
            <Link
                className={`${styles.link} ${
                    pathname === "/contact" ? styles.active : ""
                }`}
                href="/contact"
            >
                Contact 📧
            </Link>
        </Box>

    </nav>
  );
};