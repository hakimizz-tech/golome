import { useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface MobileSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  "Handbags",
  "Women", 
  "Men",
  "Children",
  "Jewellery",
  "Runway",
  "Lifestyle",
  "Fashion"
];

const faqItems = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in original condition with tags attached."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping rates apply."
  }
];

export function MobileSheet({ isOpen, onClose }: MobileSheetProps) {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[400px] bg-black text-white border-l-0 p-0"
      >
        <div className="p-6 h-full overflow-y-auto">
          <SheetHeader className="mb-8">
            <div className="flex items-center justify-between">
              
            </div>
          </SheetHeader>

          <ul className="space-y-0">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-700">
                <a 
                  href="#" 
                  className="block py-4 text-white hover:text-[#ff6900] transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="border-b border-gray-700">
              <Button
                variant="ghost"
                onClick={() => setShowFAQ(!showFAQ)}
                className="block py-4 text-white hover:text-[#ff6900] transition-colors font-medium w-full text-left justify-start h-auto p-0 hover:bg-transparent"
              >
                FAQs
              </Button>
            </li>
          </ul>

          {/* FAQ Accordion */}
          {showFAQ && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-gray-700"
                  >
                    <AccordionTrigger className="text-white hover:text-[#ff6900] hover:bg-gray-800 px-4 py-3 text-left [&[data-state=open]>svg]:rotate-180">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
