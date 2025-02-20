# Openfort x Frames v2 Demo

Source: https://github.com/farcasterxyz/frames-v2-demo

This is an example [**Frame (v2)**](https://docs.farcaster.xyz/developers/frames/v2/) to demonstrate how you can use Frames alongside Openfort's [**Openfort Kit**](https://www.openfort.xyz/docs/guides/react) feature to create novel, cross-app experiences for your users.


This app is built with [NextJS](https://nextjs.org/), and makes uses of libraries like [`@farcaster/frame-sdk`](https://www.npmjs.com/package/@farcaster/frame-sdk)



## Setup

1. Clone this repository and install the necessary dependencies using your preferred package manager:
```sh
npm i
```



2. Configure [a new Openfort Project](dashboard.openfort.xyz/).  
Initialize your environment variables by copying the contents of `.env.example` to a new `.env.local` file, and fill in the required values. You'll need to set a base URL, and your Openfort API keys.
if you need help check Quickstart [Video](https://www.youtube.com/watch?v=68EOquzJs6U&t=65s)

```sh
NEXT_PUBLIC_URL=

NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=

NEXT_PUBLIC_OPENFORT_PUBLIC_KEY=

# Shield api key, used create a signer for the user.
NEXT_PUBLIC_SHIELD_API_KEY=
NEXT_PUBLIC_SHIELD_ENCRYPTION_SHARE=

```

**That's it!** To run the demo locally, execute `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Testing the frame

You can test this Frame using [Warpcast Embed Tools](https://warpcast.com/~/developers/frames) to preview the frame interaction. Please note that a `localhost` URL will not work with Warpcast Embed Tools, so you should set up a public tunnel to your local app using a tool like [`ngrok`](https://ngrok.com/) or [Cloudflare](https://www.cloudflare.com/products/tunnel/).

## Check out

- `src/components/Demo.tsx` to see how to use Openfort to seamlessly login a user in a Farcaster frame
