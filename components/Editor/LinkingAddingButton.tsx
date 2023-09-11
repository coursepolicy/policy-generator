import { Button } from "../ui/button";

type Props = {
  setAddingLink: (isAdding: boolean) => void;
  addingLink: boolean;
};

export default function LinkingAddingButton({
  setAddingLink,
  addingLink,
}: Props) {
  return (
    <div
      className={`flex items-center justify-center ${
        addingLink ? "border-r border-zinc-500" : ""
      } relative`}
    >
      <Button
        onClick={() => {
          setAddingLink(true);
        }}
        className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
      >
        Add link
      </Button>
      <div className="triangle-down absolute bottom-[-8px] right-[4px] h-0 w-0" />
    </div>
  );
}
