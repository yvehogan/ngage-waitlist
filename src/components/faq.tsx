"use client";

import { useState, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations";
import { categories, faqsByCategory } from "@/data/faq-data";

function renderAnswer(answer: string) {
  const lines = answer.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Bullet list: lines starting with • or -
    if (/^[•\-]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[•\-]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[•\-]\s/, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-2 list-disc space-y-1 pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list: lines starting with 1. 2. etc
    if (/^\d+[.)\s]/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[.)\s]/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+[.)\s]+\s*/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-2 list-decimal space-y-1 pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    if (line.trim()) {
      elements.push(<p key={`p-${i}`} className={i > 0 ? "mt-2" : ""}>{line}</p>);
    }
    i++;
  }

  return elements;
}

export function FAQ() {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("General Questions");

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

              {filteredFaqs.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-[24px] border border-[#D81B60] bg-[#6B3A1A] px-6 py-12 text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-gray-400">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M8 11h6" />
                  </svg>
                  <p className="text-lg font-medium text-white">No results found</p>
                  <p className="mt-1 text-sm text-gray-400">
                    No questions match &quot;{search}&quot;. Try a different keyword or browse another category.
                  </p>
                  <button
                    onClick={() => setSearch("")}
                    className="mt-4 rounded-full border border-[#FF6B35] bg-[#2A1108] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#FF6B35]"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
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
                        <div>{renderAnswer(faq.answer)}</div>
                        {/* <button className="mt-4 rounded-full bg-[#2A1108] border border-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white">
                          Contact Support
                        </button> */}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
