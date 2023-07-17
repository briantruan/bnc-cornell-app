import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen w-full" style={{backgroundImage: 'url(/background.jpeg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content px-8 flex-col lg:flex-row">
          <div>
            <Image src="/logo.jpg" alt="Cornell Basics Need logo" width={150} height={150} className="max-w-sm rounded-full shadow-2xl" />
          </div>
          <div>
            <div>
              <h1 className=" pt-6 py-4 text-4xl uppercase font-bold">
                Your central hub for basic needs
              </h1>
              <p className="py-4">
                This website offers a centralized space for Cornell students and
                affiliates to identify essential resources in supporting basic
                needs and well-being. Our guides offer tutorials and helpful
                information to access the resources you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
