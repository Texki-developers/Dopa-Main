import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="RKvR80ZgxDSmi8-OyiMqt6EN0YzItjXgf6z-Nzpeenk"
        />
        <meta name="facebook-domain-verification" content="qmqbi1l3d15ddvf54yov9409qcbt9n" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '431035462525150');
                fbq('track', 'PageView');
              `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=431035462525150&ev=PageView&noscript=1"
          />
        </noscript>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16564495090">
</script>

<script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16564495090');
              `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16564495090"
          />
      </Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-4R8KCY1EB3`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-4R8KCY1EB3');
                `,
              }}
            />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
