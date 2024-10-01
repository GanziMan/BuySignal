"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
export default function AccordionComponent({
  defaultValue,
  collapsible,
  itemValue,
  header,
  content,
}: {
  defaultValue: string;
  collapsible: boolean;
  itemValue: string;
  header: string;
  content: string;
}) {
  return (
    <div>
      <Accordion
        defaultValue={defaultValue}
        collapsible={collapsible}
        type="single"
      >
        <AccordionItem value={itemValue}>
          <AccordionTrigger className="w-full flex justify-between items-center">
            <p className="font-semibold">{header}</p>
            <ChevronRightIcon
              width={20}
              height={20}
              className="font-black transform transition-transform duration-300 ${isRotated ? 'rotate-90' : 'rotate-0'}"
            />
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
