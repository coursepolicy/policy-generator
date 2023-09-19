import rightArrow from "@/public/images/right-arrow.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import websiteIcon from "@/public/images/socials/website-icon.svg";
import githubIcon from "@/public/images/socials/linkedin-icon.svg";
import linkedinIcon from "@/public/images/socials/github-icon.svg";

const staff = [
  {
    id: 1,
    name: "Max Lu",
    title: "Product",
    description:
      "Doctoral. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times.",
    picture: "/images/staff/max.jfif",
    socials: [
      {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maxhaolu/",
      },
    ],
  },
  {
    id: 2,
    name: "Genesia Ting",
    title: "Design",
    description: "Senior UX designer at EchoUser. Formery at and L.A. Times.",
    picture: "/images/staff/genetia.jfif",
    socials: [
      { id: 1, name: "Website", url: "https://genesiating.com/" },
      {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/genesiating/",
      },
    ],
  },
  {
    id: 3,
    name: "Cecil John Tantay",
    title: "Engineering",
    description:
      "Software engineer in Las Vegas, Nevada. Formerly at Hotel Engine and L.A. Times",
    picture: "/images/staff/cj.jfif",
    socials: [
      { id: 1, name: "Github", url: "https://www.github.com/cjbt" },
      { id: 1, name: "Website", url: "https://www.cjtantay.com/" },
      {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cjtantay/",
      },
    ],
  },
  // {
  //   id: 4,
  //   name: "Kevin Zhang",
  //   title: "Data",
  //   description:
  //     "Incoming Ph.D. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times",
  //   picture: "",
  //   socials: [{ id: 1, name: "LinkedIn", url: "www.github.com" }],
  // },
];

const socialIconMapper: { [key: string]: React.JSX.Element } = {
  github: <Image alt="github icon" src={githubIcon} />,
  linkedin: <Image alt="linkedin icon" src={linkedinIcon} />,
  website: <Image alt="website icon" src={websiteIcon} />,
};

export default function About() {
  return (
    <>
      <section className="grid grid-flow-row gap-5 md:gap-6">
        <h1 className="w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
          About this Project
        </h1>
        <p className="w-[100%] text-sm font-normal leading-normal text-black">
          As more educators confront the inevitable adoption of generative AI in
          student learning, many universities have released guidelines and
          roadmaps on how to incorporate AI into teaching and learning. A
          defining statement in these policies is that individual instructors
          are encouraged to determine the AI policy for their own courses.
        </p>
        <p className="w-[100%] text-sm font-normal leading-normal text-black">
          While this effort should be applauded, because every course is
          different, it also creates potential problems. First, not all
          instructors are equally knowledgeable about AI, and thus, not all are
          prepared to develop their own course policies. Second, since each
          instructor&apos;s policy will be in different formats, for students
          taking multiple courses simultaneously, confusion can quickly become
          overwhelming.
        </p>
        <p className="w-[100%] text-sm font-normal leading-normal text-black">
          Therefore, we developed the policy generator, a self-guided tool for
          anyone to create a policy for their course. With our thoughtfully
          designed policy template, this tool also simplifies the process for
          instructors to communicate their policies to students.
        </p>
        <div>
          <Button
            asChild
            variant={"ghost"}
            className="inline-flex h-[41px] w-[210px] items-center justify-center gap-2.5 rounded-[100px] border border-[#4A558E]
            bg-white px-6 py-2 text-right text-sm font-semibold leading-[25px] text-[#4A558E] hover:text-[#4A558E]"
          >
            <Link
              href="/generate"
              className="inline-flex items-center justify-center"
            >
              Generate AI Policy
              <Image alt="right pointed arrow" src={rightArrow} />
            </Link>
          </Button>
        </div>
      </section>
      <section
        className="my-[30px] grid grid-flow-row gap-5 border-y border-[#B4B4B4] pb-[60px]
       pt-[60px] md:my-[60px] md:gap-6"
      >
        <h2 className="w-[100%] max-w-[554px] text-3xl font-bold leading-normal text-[#364071]">
          About the team
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[repeat(auto-fit,minmax(25%,1fr))] md:justify-center md:gap-0">
          {staff.map((member) => (
            <article key={member.id}>
              <div className="grid grid-flow-row justify-center gap-3">
                <div className="relative h-60 w-60 overflow-hidden bg-zinc-300">
                  <Image
                    src={`${member.picture}`}
                    width={242}
                    height={242}
                    alt={`${member.name} profile picture`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
                <div className="grid grid-flow-row gap-3">
                  <div className="grid grid-flow-row gap-1">
                    <h3 className="w-[100%] max-w-[180px] text-xl font-bold leading-normal text-[#606DAB]">
                      {member.name}
                    </h3>
                    <p className="w-[100%] max-w-[158px] text-sm font-normal leading-normal text-stone-500">
                      {member.title}
                    </p>
                  </div>
                  <p className="w-[100%] max-w-[242px] text-sm font-normal leading-normal text-black">
                    {member.description}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  {member.socials.map((social) => (
                    <Button
                      asChild
                      variant={"ghost"}
                      key={social.id}
                      className="m-0 flex h-[30px] bg-transparent p-0 text-sm font-normal leading-normal text-stone-500
                      no-underline hover:bg-transparent"
                    >
                      <Link href={social.url}>
                        <span className="mr-[5px] ">
                          {socialIconMapper[social.name.toLowerCase()]}
                        </span>
                        <span className="hover:underline">{social.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div>
          We also want to thank Kevin Bowen Zhang from the University of
          Pennsylvania for his support in conducting the survey and data
          analysis during the summer.
        </div>
      </section>

      <section className="grid grid-flow-row gap-5 md:gap-6">
        <h3 className=" w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
          Contact Us
        </h3>
        <p className="text-sm font-normal leading-normal text-black">
          Are you a course instructor, student, university admin, or a
          technologist? We would love to hear from you. Drop us an email at{" "}
          <Button
            asChild
            variant={"link"}
            className="cursor-pointer p-0 text-blue-500"
          >
            <a
              className="text-sm font-normal leading-normal text-blue-500"
              href="mailto:here@coursepolicy.ai"
              target="_blank"
            >
              here@coursepolicy.ai
            </a>
          </Button>
        </p>
      </section>
    </>
  );
}
