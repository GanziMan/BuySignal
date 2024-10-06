import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
};

const AccordionDemo: React.FC = () => (
  <Accordion.Root
    className="rounded-md w-[300px] bg-mauve-6 shadow-[0_2px_10px_var(--black-a4)]"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-1"
    >
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-2"
    >
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-3"
    >
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        <div className="p-4">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "bg-transparent px-5 h-[45px] flex items-center justify-between text-[15px] leading-none text-violet-11 shadow-[0_1px_0_var(--mauve-6)] bg-white hover:bg-mauve-2 transition-all",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet-10 transition-transform duration-[300ms] ease-[cubic-bezier(0.87,0,0.13,1)]"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => {
  const state = (props as any)["data-state"]; // Casting to access data-state
  return (
    <Accordion.Content
      className={classNames(
        "overflow-hidden text-[15px] text-mauve-11 bg-mauve-2",
        className,
        {
          "animate-slideDown": state === "open",
          "animate-slideUp": state === "closed",
        }
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="p-4">{children}</div>
    </Accordion.Content>
  );
});

export default AccordionDemo;
