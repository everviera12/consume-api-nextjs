import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// import hooks
import React, { useState, useEffect } from 'react';
import Link from "next/link";


export default function Home() {

  return (
    <main className={`${inter.className}`}>
      <Link href={"/user"}>
        View user list
      </Link>
    </main>
  );
}
