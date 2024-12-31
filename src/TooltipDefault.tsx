import { Tooltip, Button } from "@material-tailwind/react";

export function TooltipDefault() {
  return (
    <Tooltip content="Material Tailwind">
      <Button
        onPointerEnterCapture={"left"}
        onPointerLeaveCapture={"right"}
        placeholder={"test"}
      >
        Show Tooltip
      </Button>
    </Tooltip>
  );
}
