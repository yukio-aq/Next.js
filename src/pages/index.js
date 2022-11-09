import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={{ pathname: "/router",query: { key: "value" }}}>
        <a>/router</a>
      </Link>
      <Link href="/router/hello/setting" as="/dummy-url">
        <a>/router</a>
      </Link>
    </>
  )
}