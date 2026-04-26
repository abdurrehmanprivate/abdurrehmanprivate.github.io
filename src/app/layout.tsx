import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdur Rehman | Cybersecurity Portfolio",
  description:
    "8th-semester BS Cybersecurity student at FAST-NUCES specializing in SOC operations, security automation, and digital forensics. Explore my experience, projects, and technical expertise.",
  keywords: [
    "Abdur Rehman",
    "Cybersecurity",
    "SOC",
    "FAST-NUCES",
    "Portfolio",
    "Security Automation",
    "Digital Forensics",
  ],
  authors: [{ name: "Abdur Rehman" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
