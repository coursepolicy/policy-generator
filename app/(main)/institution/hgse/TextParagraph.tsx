export default function TextParagraph() {
  return (
    <div className="flex pr-[48px] lg:mr-[80px] lg:pr-0 lg:pt-[10px]">
      <p className="max-w-[800px] px-4 pt-[20px] text-left text-[16px] leading-normal text-stone-500 lg:px-0">
        With the rise of tools like ChatGPT in student learning, how prepared
        are educators to set clear guidelines? We surveyed professors from 14
        major U.S. universities, gathering insights from 207 responses. Our
        findings reveal varied awareness and plans around AI policy
        implementation. Explore our detailed survey or check out sample policies
        for deeper insights.{" "}
        <span className="block pt-[40px]">
          * Please read our survey report to see the full context
        </span>
      </p>
    </div>
  );
}
