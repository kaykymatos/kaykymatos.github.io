import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayky – Analista de Sistemas Júnior | Back-end C#",
  description:
    "Portfólio de Kayky, Analista de Sistemas Júnior na CI&T com foco em desenvolvimento back-end com C# e estudando Inteligência Artificial.",
  keywords: [
    "C#",
    "ASP.NET Core",
    "Back-end",
    "Inteligência Artificial",
    "Analista de Sistemas",
    "CI&T",
    "Angular",
    "React",
    "Typescript",
    "Java",
    "Portfólio",
  ],
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
