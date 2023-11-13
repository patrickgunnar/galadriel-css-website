import "./globals.css";
import type { Metadata } from "next";
import HTML from "@/components/html/HTML";

export const metadata: Metadata = {
    title: "Galadriel.CSS | JavaScript object-based approach for creating styles",
    description: "JavaScript object-based approach for creating styles",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HTML>{children}</HTML>;
}