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
};

export default function BottomBar({
  hideDeleteButton,
  handleDelete,
  handleOnDiscard,
  handleOnSave,
  loading,
  setIsHovering,
  useCaseBgColor,
}: Props) {
  return (
    <div
      className={`bottom-x absolute bottom-[-40px] right-0 z-10 h-[45px] w-[100%] border-b border-[#cccccc] ${
        useCaseBgColor ? useCaseBgColor : "bg-white"
      } shadow-bottom-shadow-on-edit`}
    >
      <div className="absolute bottom-[10px] left-[10px] flex">
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
