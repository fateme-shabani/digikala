import { Icon } from "@iconify/react";

type BaseIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function BaseIcon(props: BaseIconProps) {
  const { name, size, className } = props;
  return <Icon icon={name} width={size} height={size} className={className} />;
}
