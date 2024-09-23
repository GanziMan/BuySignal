"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
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
          <AccordionTrigger>{header}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
