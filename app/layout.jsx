import "../public/css/styles.css";

export const metadata = {
  title: "James Portfolio",
  description:
    "Welcome to my portfolio! Explore the projects and work I've done as a web developer. Discover my experience, skills, and passion for programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css"/>
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}