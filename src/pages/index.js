import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import profilePic from "./../../public/images/profile/developer-pic-1.png";
import lightBulb from "./../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "./../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

const buttonAsLink =
  "flex items-center bg-dark text-light p-2.5 px-6 rounded-lg";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <AnimatedText
                text="Turning vision Into Reality with Code and Design."
                className="text-5xl"
              />
              <p className="my-5 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                   hover:border-dark"
                  href="./dummy.pdf"
                  download="true" // if you want to download the resume on current tab
                  // target='_blank' /// if you want to open pdf in another tab
                  /* if download and target not provided the resume will open on current tab */
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* The resume must be in  public folder */}
                <Link
                  href="mailto:singhalash185@gmail.com"
                  className="text-dark font-lg underline ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt='light bulb' className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
