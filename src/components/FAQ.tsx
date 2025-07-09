// import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
             <span className="text-[#ff6900] hover:text-[#ff6f00]">
                Product Information
             </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Every piece is designed with care, crafted from quality fabrics, and finished with thoughtful details to help you stand out effortlessly. We believe you should feel confident and comfortable, which is why we provide clear sizing guides, honest fit notes, and care instructions to keep your favorites looking fresh, season after season..
          </p>
          <p>
            We know shopping online can feel like a guessing game — so we’re here to make it simple. From fabric feel to color accuracy, we share everything you need to choose the perfect fit for your style. If you ever need extra help, our team is ready with more photos, styling tips, or personal advice to make sure what you see is exactly what you get
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> 
            <span className="text-[#ff6900] hover:text-[#ff6900]">
                Shipping Details
            </span>
            </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
            <span className="text-[#ff6900] hover:text-[#ff6900]">Return Policy</span>
            </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FAQ