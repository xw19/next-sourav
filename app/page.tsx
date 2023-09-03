import Image from "next/image";

export default function Home() {
  return (
    <main className="md:container md:mx-auto">
      <div className="flex color">
        <div className="flex flex-auto w-32 h-96 center items-center justify-center px-24">
          <div>
            <h1 className="text-4xl font-extrabold">Sourav Moitra</h1>
            <p className="text-xl">is a Full stack developer. He talks about <br /> #react, #go, #react-native and #system-design</p>
          </div>
        </div>
        <div className="flex flex-auto w-32 h-96 center items-center justify-center">
          <Image src="https://storage.googleapis.com/souravmoitra/sourav.png" alt="profile" width="240" height="240" className="rounded-full" />
        </div>
      </div>
    </main>
  )
}
