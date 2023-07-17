import Image from "next/image";

export default function Loading() {
  return (
    <div className="hero min-h-screen w-full" style={{backgroundImage: 'url(/background.jpeg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content px-8 flex-col">
            <div>
                <Image src="/logo.jpg" alt="Cornell Basics Need logo" width={150} height={150} className="max-w-sm rounded-full shadow-2xl" />
            </div>
            <div>
                <span className="loading loading-dots loading-sm"/>
            </div>
        </div>
    </div>
  );
}
