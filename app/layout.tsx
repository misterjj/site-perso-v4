import "./globals.css";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Développeur Web à Lille | Jonathan Jorand",
  description: "\"Développeur web basé à Lille, spécialisé dans la création de sites web modernes et performants. Contactez-moi pour vos projets web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const glowings: number[] = [1,2,3,4];

  return (
    <html lang="fr">
      <body
        className={`bg-slate-800 relative h-full text-gray-50 relative py-2`}
      >
        <div className="absolute w-full h-full overflow-hidden top-0 left-0">
            {glowings.map((_, index) => (
                <div className="glowing" key={index}>
                    {[1,2,3].map((i)=>(
                        <span style={{'--i': i} as React.CSSProperties} key={i}></span>
                    ))}
                </div>
            ))}
        </div>
        {children}
      </body>
    </html>
  );
}
