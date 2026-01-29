import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How can I become a mentor with Vocalis?",
      answer:
        "We welcome professional women from all fields who are passionate about empowering young girls. Simply fill out our mentor application form, undergo a brief screening process, and attend our mentor orientation session. We'll match you with mentees based on your expertise and their interests.",
    },
    {
      question: "How do girls get selected for the scholarship program?",
      answer:
        "Our scholarship program considers academic performance, financial need, and demonstrated commitment to personal growth. Girls are nominated by their schools or can apply directly. Our selection committee reviews applications quarterly and awards scholarships based on available funds.",
    },
    {
      question: "What schools does Vocalis work with?",
      answer:
        "We currently partner with over 85 high schools across 12 counties in Kenya. We're constantly expanding our reach to include more schools, particularly in underserved rural areas. Schools can apply to become partner institutions through our website.",
    },
    {
      question: "How can I donate to support Vocalis programs?",
      answer:
        "You can support our work through one-time donations, monthly giving, or sponsoring a specific girl's education. We accept donations via M-Pesa, bank transfer, and international payment methods. 100% of designated scholarship donations go directly to girls' education.",
    },
    {
      question: "Are the Speak Out sessions confidential?",
      answer:
        "Absolutely. All our Speak Out sessions are conducted in a safe, confidential environment. Our trained facilitators ensure that girls can share freely without judgment. We follow strict privacy protocols and never share personal stories without explicit consent.",
    },
    {
      question: "Can organizations partner with Vocalis?",
      answer:
        "Yes! We welcome corporate partnerships, NGO collaborations, and institutional support. Partners can sponsor programs, provide volunteer mentors, host career exposure visits, or support our infrastructure. Contact our partnerships team to discuss collaboration opportunities.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header & Image */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-foreground">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions about how Vocalis works? Find answers to the most common questions below, or reach out to
              us directly.
            </p>

            <div className="relative rounded-3xl overflow-hidden">
              <img src="/african-students-raising-hands-classroom-eager-lea.jpg" alt="Students in classroom" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium">Still have questions?</p>
                <p className="text-white/80 text-sm">Contact us at hello@vocalis.org</p>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
