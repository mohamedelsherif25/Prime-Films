import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./componants/Nav";
import { WatchlistProvider } from "./context/WatchlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Films Review",
    template: "%s | Films Review",
  },
  description:
    "Discover and track movies. Search, rate, and manage your watchlist.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Films Review",
    description:
      "Discover and track movies. Search, rate, and manage your watchlist.",
    type: "website",
    siteName: "Films Review",
  },
  twitter: {
    card: "summary_large_image",
    title: "Films Review",
    description:
      "Discover and track movies. Search, rate, and manage your watchlist.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <WatchlistProvider>
          <Nav />
          {children}
        </WatchlistProvider>
      </body>
    </html>
  );
}
