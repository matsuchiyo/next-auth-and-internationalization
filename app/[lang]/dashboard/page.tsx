import Image from "next/image";

export default function Dashboard({ params }: { params: { lang: string } }) {
  return (
    <>
      Dashboard lang: {params.lang}
    </>
  );
}
