import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIForce | Dados em Decisões",
  description:
    "Treinamentos e consultoria em Power BI, Excel, SQL, Python, automação, dados e inteligência artificial.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
