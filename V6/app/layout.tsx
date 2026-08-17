import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIForce | Dados, BI, Automação e IA",
  description:
    "Treinamentos e consultoria em Business Intelligence, dados, Excel, SQL, Python, automação e Inteligência Artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
