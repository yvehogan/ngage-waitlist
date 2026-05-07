"use client";

import { useState, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations";

const categories = [
  "General questions",
  "Data & Technical Questions",
  "Council Resource Questions",
  "Political & Reputational Questions",
  "Impact & Evaluation Questions",
  "Financial Questions",
  "Partnership & Governance Questions",
  "Practical Implementation Questions",
];

const faqsByCategory: Record<string, { question: string; answer: string }[]> = {
  "General questions": [
    {
      question: "What is CitizensNgage?",
      answer:
        "CitizensNgage is the CiH philosophy in motion — a youth civic programme and digital platform (programme first, platform second). The programme (delivered with CiH Academy and local youth services across the councils) awakens, educates and enables young people as agents of change through 4–6 week journeys: capacity building, design sprints and real civic actions (FOI, consultations, budget inputs). The platform (app) gives them hyperlocal council information and participation tools, and gives councils dashboards to see and respond to youth voice. Together they add structured programme plus digital infrastructure, building on and complementing existing democratic education and youth engagement work, so young people can engage — and councils can respond — at scale.",
    },
    {
      question: "Who is Creative Ideation Hub?",
      answer:
        "Creative Ideation Hub (CiH) is a social enterprise focused on youth civic engagement and democratic participation, working to bridge the gap between young people and local government.",
    },
    {
      question: "Why focus specifically on youth?",
      answer:
        "Young people are the most underrepresented demographic in local democracy. By focusing on youth, we build lifelong civic habits and give councils direct insight into the needs of their youngest residents.",
    },
    {
      question: 'What does "pilot partnership" mean?',
      answer:
        "A pilot partnership means working with a select number of councils to test, refine, and validate the programme and platform before wider rollout — ensuring it delivers real impact.",
    },
  ],
  "Data & Technical Questions": [
    {
      question: "How is user data protected?",
      answer:
        "All data is encrypted in transit and at rest. We follow GDPR best practices and conduct regular security audits.",
    },
  ],
  "Council Resource Questions": [
    {
      question: "What resources does a council need to participate?",
      answer:
        "Councils need a dedicated liaison officer and access to relevant public data. The platform handles the rest.",
    },
  ],
};

export function FAQ() {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("General questions");

  const currentFaqs = faqsByCategory[activeCategory] || [];
  const filteredFaqs = currentFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[56px]">
              Frequently Asked{" "}
              <span className="text-[#FF6B35]">Questions</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
        <div className="mx-auto mt-14 rounded-3xl bg-[#2A1108] p-6 sm:p-10">
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex flex-col gap-2 sm:w-1/3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-fit rounded-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-[#FF6B35] text-white"
                      : "bg-[#FF6B351A] text-gray-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex-1">
              <div className="mb-8 flex w-fit items-center gap-3 rounded-[24px] bg-[#552311] px-4 py-3">
                {!searchFocused && !search && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                )}
                <input
                  type="text"
                  placeholder={searchFocused ? "" : "Search Questions"}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-64 bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
                />
              </div>

              <Accordion defaultValue={[0]}>
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={index}
                    className="mb-4 overflow-hidden rounded-[24px] border border-[#D81B60] bg-[#6B3A1A]"
                  >
                    <AccordionTrigger className="px-5 py-4 text-sm font-medium text-white hover:no-underline">
                      Q: {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-[#E4E7EC]">
                      <p>A: {faq.answer}</p>
                      <button className="mt-4 rounded-full bg-[#2A1108] border border-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white">
                        Contact Support
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
