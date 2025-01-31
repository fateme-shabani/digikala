import { Icon } from '@iconify/react';

type IconsProps = {
  name: string;
  size?: number;
  className?:string
};

export function Icons(props  : IconsProps) {
    const {name, size ,className }=props
  return <Icon icon={name} width={size} height={size} className={className}  />;
}

