import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeMonarch - Web & App Development",
    short_name: "CodeMonarch",
    description: "Professional website development, app development, UI/UX design, and freelancing services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0000ff",
    scope: "/",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/1.webp",
        sizes: "540x720",
        type: "image/webp",
        form_factor: "narrow",
      },
      {
        src: "/2.webp",
        sizes: "1280x720",
        type: "image/webp",
        form_factor: "wide",
      },
    ],
    categories: ["business", "productivity"],
    shortcuts: [
      {
        name: "View Projects",
        short_name: "Projects",
        description: "View our recent projects",
        url: "/#projects",
        icons: [{ src: "/logo192.png", sizes: "192x192" }],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Contact CodeMonarch",
        url: "/#contact",
        icons: [{ src: "/logo192.png", sizes: "192x192" }],
      },
    ],
  };
}
