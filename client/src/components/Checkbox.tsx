import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function CheckBox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox.Root
        className="bg-[#B1B1B1] w-6 h-6 rounded flex items-center justify-center focus:outline-none focus:bg-balck data-[state=checked]:bg-[#53B175] data-[state=checked]:text-white"
        defaultChecked
        id="checkbox-label"
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon width={20} height={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="checkbox-label">
        {label}
      </label>
    </div>
  );
}
