import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const LoadingButton = React.memo(
  React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    return (
      <Button {...props} ref={ref}>
        {props.disabled ? (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          props.children
        )}
      </Button>
    );
  }),
);

export default LoadingButton;
