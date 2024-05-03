import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center text-center
      sm:mx-0"
    >
      <div className="mb-[120px] grid max-w-[1600px] grid-flow-row gap-2 px-4 lg:px-4 ">
        <h3 className=" mt-[45px] w-[100%] text-[40px] font-bold leading-normal text-[#364071] lg:mt-[105px]">
          Contact Us
        </h3>
        <p className="mt-[25px] text-[16px] font-normal leading-normal text-black">
          Are you a course instructor, student, university admin, or a
          technologist? We would love to hear from you.
        </p>
        <p className="text-[17px]">
          {" "}
          Drop us an email at{" "}
          <Button
            asChild
            variant={"link"}
            className="cursor-pointer p-0 text-[16px] text-blue-500"
          >
            <a href="mailto:here@coursepolicy.ai" target="_blank">
              here@coursepolicy.ai
            </a>
          </Button>
        </p>
      </div>
    </footer>
  );
}
