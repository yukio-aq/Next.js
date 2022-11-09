import { useRouter } from "next/router";

export default function Setting({ query }) {
    const router = useRouter();
    const clickhandler = () => {
        router.push('/');
    }
    const clickhandler2 = () => {
        router.replace('/');
    }
    const clickhandler3 = () => {
        router.back();
    }
    const clickhandler4 = () => {
        router.reload();
    }
  
    return (
        <>
            <h1>{router.query.name}</h1>
            <button onclick={clickhandler}>画面遷移</button>
        </>
    )
}

export async function getServerSideProps({ query }) {

    return {
        props: { query }
    }
}