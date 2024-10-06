import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";

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
    className="bg-mauve-6 shadow-[0_2px_10px_var(--black-a4)]"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-1"
    >
      <AccordionTrigger>상품 설명</AccordionTrigger>
      <AccordionContent>
        빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은 사랑을
        받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된
        오버레이와 깔끔한 마감 처리, 과하지 않은 절제된 화려함으로 빛나는
        존재감을 발휘해 보세요. 현재 컬러: 화이트/화이트 스타일 번호: CW2288-111
        제조 국가/지역: 중국, 인도, 베트남
      </AccordionContent>
    </Accordion.Item>
    <Separator className="w-full bg-[#E2E2E2] h-[1px] " />

    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-2"
    >
      <AccordionTrigger>사이즈 & 팁</AccordionTrigger>
      <AccordionContent>
        정사이즈보다 크게 나온 제품으로, 반 사이즈 작게 주문하는 것을
        추천드립니다. 사이즈 가이드
      </AccordionContent>
    </Accordion.Item>
    <Separator className="w-full bg-[#E2E2E2] h-[1px] " />

    <Accordion.Item
      className="overflow-hidden mt-1 first:mt-0 first:rounded-t-md last:rounded-b-md focus-within:relative focus-within:z-[1] focus-within:shadow-[0_0_0_2px_var(--mauve-12)]"
      value="item-3"
    >
      <AccordionTrigger>리뷰</AccordionTrigger>
      <AccordionContent>
        <div className="p-4"></div>
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
