export default function About() {
    return ( 
        <main>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: "url(/background.jpeg)" }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content px-8 flex flex-col items-start">
                    <div>
                        <h1 className="py-4 text-4xl uppercase font-bold">
                            List of Demands Survey (Fall 2022)
                        </h1>
                    </div>
                    <div>
                        <p className="pb-4">
                            Please watch our brief presentation on our findings and our demands to the
                            Cornell administration.
                        </p>
                    </div>
                    <div className="grow w-full aspect-w-6 aspect-h-4">
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ7fYWIo6gN-vrvBRfGyFS0ZCv-HyNe85zr6cm2IEkc6ZYsZO9IxA7qjimrRs4jLe6YmrsaYBCiTfxu/embed?start=true&loop=true&delayms=5000" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>        
                    </div>         
                </div>
            </div>
        </main>
    )
}
