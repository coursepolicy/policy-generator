import { cn } from "@/lib";
import BottomDeleteButton from "./BottomDeleteButton";
import BottomDiscardButton from "./BottomDiscardButton";
import BottomSaveButton from "./BottomSaveButton";

type Props = {
  handleOnSave: () => Promise<void>;
  handleOnDiscard: () => void;
  handleDelete: () => void;
  loading: boolean;
  hideDeleteButton?: boolean;
  setIsHovering: (isHovering: boolean) => void;
  useCaseBgColor?: string;
  className?: string;
};

export default function BottomBar({
  hideDeleteButton,
  handleDelete,
  handleOnDiscard,
  handleOnSave,
  loading,
  setIsHovering,
  useCaseBgColor,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `z-10 w-[100%] ${
          useCaseBgColor ? useCaseBgColor : "bg-white"
        } shadow-bottom-shadow-on-edit`,
        className,
      )}
    >
      <div className="flex pt-4">
        <BottomSaveButton
          handleOnSave={handleOnSave}
          loading={loading}
          setIsHovering={setIsHovering}
        />

        <BottomDiscardButton
          setIsHovering={setIsHovering}
          handleOnDiscard={handleOnDiscard}
        />
      </div>
      {!hideDeleteButton && (
        <BottomDeleteButton
          handleDelete={handleDelete}
          setIsHovering={setIsHovering}
        />
      )}
    </div>
  );
}
