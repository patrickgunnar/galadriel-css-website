import "./globals.css";
import type { Metadata } from "next";
import HTML from "@/components/html/HTML";

export const metadata: Metadata = {
    title: "Galadriel.CSS | JavaScript object-based approach to create styles, with a focus on utility-first CSS classes.",
    description: "JavaScript object-based approach to create styles, with a focus on utility-first CSS classes.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HTML>{children}</HTML>;
}