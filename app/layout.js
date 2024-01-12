import "../public/css/styles.css";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio! Explore the projects and work I've done as a web developer. Discover my experience, skills, and passion for programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
