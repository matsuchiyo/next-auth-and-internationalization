import Image from "next/image";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      Home lang: {params.lang}
    </>
  );
}
