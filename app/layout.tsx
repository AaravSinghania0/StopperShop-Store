import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "StopperShop",
	description: "StopperShop, an E-Commerce Store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<ToastProvider />
				<ModalProvider />
				<Navbar />
				<main className="pt-[3.5rem] bg-slate-50">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
