import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionDescriptionProps {
  description: string;
}

export function AccordionDescription({ description }: AccordionDescriptionProps) {
  return (
    <Accordion
      type="single"
      className="w-full border-1 px-4 rounded-lg"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="font-medium text-gray-700">Descrição</span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-500">{description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
