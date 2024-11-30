import Link from "next/link";
import SidebarButton from "./sidebar-button";
import SidebarOption from "./sidebar-option";
import { Suspense } from "react";
import Loading from "@/app/loading";

const instagram = "https://instagram.com/cornellbasicneeds";
const slack = "https://basicneedscoalitionhq.slack.com/archives/C07Q8BBCU5T";
const copyright = "2024";

export default function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <SidebarButton className="" />
      </div>

      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-70 h-full bg-base-200 text-base-content">
          {/* Header */}

          <SidebarOption
            link="/"
            text="Cornell Basic Needs"
            options="uppercase"
          />

          {/* Divider */}

          <li className="grow btn-disabled">
            <div className="divider" />
          </li>

          {/* Sidebar Options */}

          {/* Announcements */}

          <SidebarOption
            link="/announcements"
            text="Announcements"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-megaphone"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            }
          />

          {/* About Us */}

          <SidebarOption
            link="/about"
            text="About Us"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            }
          />

          {/* Get Involved */}

          <SidebarOption
            link="/get-involved"
            text="Get Involved"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-merge"
              >
                <path d="m8 6 4-4 4 4" />
                <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                <path d="m20 22-5-5" />
              </svg>
            }
          />

          {/* Access Guides */}

          <SidebarOption
            link="/guides"
            text="Access Guides"
            options="lg:grow"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-files"
              >
                <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                <path d="M15 2v5h5" />
              </svg>
            }
          />

          {/* Close Sidebar */}

          <li className="lg:hidden grow">
            <label htmlFor="sidebar" className="drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-minimize-2"
              >
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" x2="21" y1="10" y2="3" />
                <line x1="3" x2="10" y1="21" y2="14" />
              </svg>
              Close Sidebar
            </label>
          </li>

          {/* Divider */}

          <li className="btn-disabled">
            <div className="divider" />
          </li>

          {/* Footer */}

          <li>
            <footer className="footer items-center px-4 text-neutral-content">
              <div className="items-center grid-flow-col">
                <p>
                  © {copyright} | <Link href={"/studio"}>Portal</Link>
                </p>
              </div>
              <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
                <button className="btn btn-square">
                  <Link
                    href={instagram}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                </button>
                <button className="btn btn-square">
                  <Link 
                    href={slack} 
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-messages-square"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </Link>
                </button>
              </div>
            </footer>
          </li>
        </ul>
      </div>
    </div>
  );
}
