import Head from "next/head";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta property="og:title" content="Title" />
      </Head>

      <Script src="/jquery-3.2.1.min.js"
        onLoad={() => setLoad(true)}
        onError={e => {
          console.log(e)
        }}
      />
    </>
  )
}