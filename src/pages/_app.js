import "@/styles/globals.css";
import customTheme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const chatBot = document.createElement("script");
    chatBot.innerHTML =
      "(function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', '4XvkbWvH9mXyfactd_c', {});";
    document.body.appendChild(chatBot);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
