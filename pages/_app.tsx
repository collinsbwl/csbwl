import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
