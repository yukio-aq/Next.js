import { useRouter } from "next/router";

export default function Setting({ query }) {
    const router = useRouter();
    return <h1>{router.query.name}</h1>
}

export async function getServerSideProps({ query }) {

    return {
        props: { query }
    }
}