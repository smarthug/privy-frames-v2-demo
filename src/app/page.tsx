import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  // imageUrl: `${appUrl}/opengraph-image.png`,
  imageUrl: `${appUrl}/splash.png`,
  button: {
    title: "Openfort Kit!",
    action: {
      type: "launch_frame",
      name: "Openfort Kit Demo",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Openfort Kit v2 Demo",
    openGraph: {
      title: "Openfort Kit v2 Demo",
      description: "A Openfort Kit v2 demo app.",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
