import "./globals.css";
// import Header from "@/components/header/header";

export const metadata = {
  title: "Project Network",
  description: "Project Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header pageName="Dashboard" /> */}
      <body>{children}</body>
    </html>
  );
}
