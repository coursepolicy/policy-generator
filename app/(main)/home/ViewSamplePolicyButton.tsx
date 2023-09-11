import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ViewSamplePolicyButton() {
  return (
    <div>
      <Button
        asChild
        className=" flex h-[41px] w-[220px] items-center justify-start gap-2.5 rounded-[100px] bg-[#4A558E] px-6
              py-2 text-right text-sm font-semibold leading-[25px] text-white hover:bg-[#364071] sm:mt-[10px]"
        variant={"default"}
      >
        <Link href="/policy/sample">View a sample policy</Link>
      </Button>
    </div>
  );
}
