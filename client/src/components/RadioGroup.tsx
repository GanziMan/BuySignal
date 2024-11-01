"use client";

import * as RadioGroupPrimmitives from "@radix-ui/react-radio-group";

export interface RadioGroupProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  handleRadioChange: (value: string) => void;
}
export default function RadioGroup({
  children,
  value,
  className,
  handleRadioChange,
}: RadioGroupProps) {
  const onValueChange = (value: string) => {
    handleRadioChange?.(value);
  };
  return (
    <RadioGroupPrimmitives.Root
      className={className}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </RadioGroupPrimmitives.Root>
  );
}

export interface RadioGroupItemProps {
  value: string;
  label: string;
  className?: string;
}

export function RadioGroupItem({ value, label }: RadioGroupItemProps) {
  return (
    <div className="flex items-center gap-2">
      <RadioGroupPrimmitives.Item
        className={"m-[2px] w-5 h-5 rounded-full border p-[3px]"}
        value={value}
      >
        <RadioGroupPrimmitives.Indicator className="block w-full h-full rounded-full bg-lime-500" />
      </RadioGroupPrimmitives.Item>
      <label className="Label">{label}</label>
    </div>
  );
}
