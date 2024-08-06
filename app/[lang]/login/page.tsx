import Image from "next/image";

export default function Login({ params }: { params: { lang: string } }) {
  return (
    <>
      Login lang: {params.lang}
    </>
  );
}
