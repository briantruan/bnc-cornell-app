import Image from "next/image";

export const metadata = {
  title: "Get Involved"
}

export default function GetInvolved() {
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
                Get Involved
              </h1>
              <p className="py-4">
                Follow us on Instagram and join our Slack for announcements by accessing the Sidebar. 
                We offer &quot;pop-up shops&quot; around campus throughout the semesters for your basic needs!
              </p>
              <p className="py-4">
                Come to our meetings in Anabel Taylor Hall B27 on Thursdays at 4:30 PM!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
