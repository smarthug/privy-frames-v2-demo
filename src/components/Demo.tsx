"use client";

import { OpenfortKitButton } from "@openfort/openfort-kit";
import frameSdk, { type FrameContext } from "@farcaster/frame-sdk";
import { useEffect, useState } from "react";

export default function Demo() {
  const [context, setContext] = useState<FrameContext>();
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

     // Initialize the frame SDK
  useEffect(() => {
    const load = async () => {
      setContext(await frameSdk.context);
      frameSdk.actions.ready({});
    };
    if (frameSdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <OpenfortKitButton showBalance={true} />
    </div>
  );
}

