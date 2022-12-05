import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "~/utils";

import s from "~/styles/nav.module.css";

const Header: React.FC = () => {
  return (
    <header className={s["nav-container"]}>
      <nav className={s["nav"]}>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center justify-center"
        >
          <Link href="/" className="text-2xl font-bold hover:underline">
            DigiVision
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={s["nav-items-container"]}
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className={s["nav-item"]}>
              {item.label}
            </Link>
          ))}
        </motion.div>
      </nav>
    </header>
  );
};

export { Header };
