import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import websiteIcon from "@/public/images/socials/website-icon.svg";
import githubIcon from "@/public/images/socials/linkedin-icon.svg";
import linkedinIcon from "@/public/images/socials/github-icon.svg";
import { honorableMentions, staff } from "@/lib";

const socialIconMapper: { [key: string]: React.JSX.Element } = {
  github: <Image alt="github icon" src={githubIcon} />,
  linkedin: <Image alt="linkedin icon" src={linkedinIcon} />,
  website: <Image alt="website icon" src={websiteIcon} />,
};

export default function About() {
  return (
    <>
      <section className="grid grid-flow-row gap-5 md:gap-6 md:pt-[30px]">
        <h1 className="w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
          About CoursePolicy.AI
        </h1>
        <p className="w-[100%] text-[16px] font-medium leading-normal text-stone-500">
          As more educators confront the inevitable adoption of generative AI in
          student learning, many universities have released guidelines and
          roadmaps on how to incorporate AI into teaching and learning. A
          defining statement in these policies is that individual instructors
          are encouraged to determine the AI policy for their own courses.
        </p>
        <p className="w-[100%] text-[16px] font-medium leading-normal text-stone-500">
          While this effort should be applauded, because every course is
          different, it also creates potential problems. First, not all
          instructors are equally knowledgeable about AI, and thus, not all are
          prepared to develop their own course policies. Second, since each
          instructor&apos;s policy will be in different formats, for students
          taking multiple courses simultaneously, confusion can quickly become
          overwhelming.
        </p>
        <p className="w-[100%] text-[16px] font-medium leading-normal text-stone-500">
          Therefore, we developed the policy generator, a self-guided tool for
          anyone to create a policy for their course. With our thoughtfully
          designed policy template, this tool also simplifies the process for
          instructors to communicate their policies to students.
        </p>
      </section>
      <section
        className="my-[30px] flex flex-col gap-5 border-t border-[#B4B4B4] pt-[70px]
       md:gap-6"
      >
        <h2 className="w-[100%] max-w-[554px] text-3xl font-bold leading-normal text-[#364071]">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:justify-center md:gap-0 lg:pt-[28px]">
          {staff.map((member) => (
            <article
              key={member.id}
              className="mx-auto flex w-full max-w-[240px] flex-col justify-center gap-7 md:mx-0 md:max-w-none md:flex-row md:justify-start md:pr-[10px]"
            >
              <div className="relative w-full overflow-hidden rounded md:max-h-[145px] md:max-w-[145px] lg:mb-[100px]">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    alt={`${member.picture}`}
                    loading="lazy"
                    width={240}
                    height={240}
                    decoding="async"
                    src={member.picture}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="w-[100%] max-w-[250px] text-xl font-bold leading-normal text-[#606DAB]">
                    {member.name}
                  </h3>
                  <p
                    className="w-[100%] max-w-[158px] text-sm font-normal leading-normal text-stone-500"
                    aria-label={
                      member.name + "'s Job Department: " + member.title
                    }
                  >
                    {member.title}
                  </p>
                </div>
                <p className="max-w-[300px] text-sm font-normal leading-normal text-black lg:w-[100%] lg:max-w-none">
                  {member.description}
                </p>
                <ul
                  className="flex flex-col items-start lg:flex-row "
                  role="presentation"
                >
                  {member.socials.map((social) => (
                    <li className="mr-[5px] list-none" key={social.id}>
                      <Button
                        asChild
                        variant="ghost"
                        className="m-0 flex h-[30px] bg-transparent p-0 text-sm font-normal leading-normal text-stone-500 no-underline
                          hover:bg-transparent"
                      >
                        <Link
                          href={social.url}
                          aria-label={`${member.name}'s ${social.name}`}
                        >
                          <span className="mr-[5px]">
                            {socialIconMapper[social.name.toLowerCase()]}
                          </span>
                          <span className="hover:underline">{social.name}</span>
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-[#B4B4B4] pb-[40px] pt-[30px]">
        <h2 className="w-[100%] max-w-[554px] pb-[20px] pt-[20px] text-3xl font-bold leading-normal text-[#364071]">
          Special Thanks
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[repeat(auto-fit,minmax(25%,1fr))] md:justify-center md:gap-0">
          {honorableMentions.map((member) => (
            <article key={member.id}>
              <div className="grid grid-flow-row justify-center gap-3 md:justify-start">
                <div className="grid grid-flow-row gap-3">
                  <div className="grid grid-flow-row gap-1">
                    <h3 className="w-[100%] max-w-[200px] text-xl font-bold leading-normal text-[#606DAB]">
                      {member.name}
                    </h3>
                    <p
                      className="w-[100%] max-w-[250px] text-sm font-normal leading-normal text-stone-500"
                      aria-label={`${member.name}'s Job Department: ${member.title}`}
                    >
                      {member.title}
                    </p>
                  </div>
                  <p className="w-[100%] max-w-[242px] text-sm font-normal leading-normal text-black lg:pb-[20px] ">
                    {member.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div></div>
      </section>
      <section className="grid grid-flow-row gap-5 border-t border-[#B4B4B4] pt-[44px] md:gap-2">
        <h3 className=" w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
          Contact Us
        </h3>
        <p className="text-[16px] font-medium leading-normal text-stone-500">
          Are you a course instructor, student, university admin, or a
          technologist? We would love to hear from you. Drop us an email at{" "}
          <Button
            asChild
            variant={"link"}
            className="cursor-pointer p-0 text-[16px] text-blue-500"
          >
            <a
              className="font-medium leading-normal text-blue-500 underline"
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
