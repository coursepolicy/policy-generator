import rightArrow from "@/public/images/right-arrow.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const staff = [
  {
    id: 1,
    name: "Max Lu",
    title: "Product",
    description:
      "Incoming Ph.D. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times",
    socials: [
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
    ],
  },
  {
    id: 1,
    name: "Genesia Ting",
    title: "PhD Student, University of Washington",
    description:
      "Incoming Ph.D. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times",
    socials: [
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
    ],
  },
  {
    id: 1,
    name: "Cecil John Tantay",
    title: "PhD Student, University of Washington",
    description:
      "Incoming Ph.D. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times",
    socials: [
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
    ],
  },
  {
    id: 1,
    name: "Kevin Zhang",
    title: "PhD Student, University of Washington",
    description:
      "Incoming Ph.D. student at the Harvard Graduate School of Education and formerly Product Development Lead at Bloomberg Media and R&D Lead at L.A. Times",
    socials: [
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
      { id: 1, name: "Github", url: "ww.github.com", icon: "" },
    ],
  },
];

export default function About() {
  return (
    <main className="mx-auto my-0 w-[100%] max-w-[1040px] px-[20px] py-[30px] md:mt-[60px]">
      <section className="grid grid-flow-row gap-5 md:gap-9">
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
            variant={"outline"}
            className=" h-9 w-[163.30px]  gap-1.5 rounded-[3px]
            border border-indigo-900 px-3 py-1.5 text-center text-xs font-bold leading-normal
            text-indigo-900"
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
      <section className="my-[30px] border-y border-[#B4B4B4] py-[30px] md:my-[60px] md:py-[60px]">
        <h2 className="w-[100%] max-w-[554px] text-3xl font-bold leading-normal text-[#364071]">
          About the team
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((member) => (
            <article key={member.id}>
              <div className="grid grid-flow-row justify-center gap-3">
                <div className="h-[242px] w-[100%] max-w-[242px] bg-zinc-300"></div>
                <div className="grid grid-flow-row gap-3">
                  <div>
                    <h3 className="w-[100%] max-w-[180px] text-xl font-bold leading-normal text-slate-500">
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
                    <div key={social.id} className="flex">
                      <div className="mr-[5px]">icon</div>
                      <p>{social.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
          Contact Us
        </h3>
        <p className="text-sm font-normal leading-normal text-black">
          Are you a course instructor, student, university admin, or a
          technologist? We would love to hear from you. Drop us an email at
          <Button asChild variant={"link"} className="cursor-pointer">
            <a>here@coursepolicy.ai</a>
          </Button>
        </p>
      </section>
    </main>
  );
}
