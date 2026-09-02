"use client";

import { useState } from "react";
import Link from "next/link";
import "./chatbot.css";

type Message = { id: number; role: "bot" | "user"; text: string };
type Option = { label: string; next: string; href?: string };

const flows: Record<string, { text: string; options: Option[] }> = {
  start: {
    text: "Hi, I’m Sutra Health Assistant. I can help you explore our approach and find the right next step.",
    options: [
      { label: "Understand my health", next: "health" },
      { label: "Explore programs", next: "programs" },
      { label: "Yoga Therapy", next: "yoga" },
      { label: "Nutrition & Lifestyle", next: "nutrition" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  health: {
    text: "You can start by learning about Sutra Health’s whole-person approach and the 21-Point Health System.",
    options: [
      { label: "Learn about 21-Point Health System", next: "assessment" },
      { label: "Explore health conditions", next: "conditions", href: "/conditions" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  assessment: {
    text: "The 21-Point Health System is a key part of Sutra Health’s approach. For the complete official framework, please use the assessment or speak with the team.",
    options: [
      { label: "Start assessment", next: "assessment-link", href: "/assessment" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  programs: {
    text: "Sutra Health focuses on integrative lifestyle healthcare, including lifestyle medicine, yoga therapy, nutrition, lifestyle modification and health education.",
    options: [
      { label: "View health conditions", next: "conditions", href: "/conditions" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  yoga: {
    text: "Yoga Therapy is one part of Sutra Health’s integrative approach. It can be explored alongside lifestyle and health education.",
    options: [
      { label: "Explore Yoga Therapy", next: "yoga-link", href: "/yoga-therapy" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  nutrition: {
    text: "Nutrition and lifestyle modification are core areas of Sutra Health’s integrative approach.",
    options: [
      { label: "Explore programs", next: "programs" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  conditions: {
    text: "You can explore the health areas currently covered on our Conditions page.",
    options: [
      { label: "Open Conditions", next: "conditions-link", href: "/conditions" },
      { label: "Book a consultation", next: "book", href: "/appointment" },
    ],
  },
  book: {
    text: "A consultation is the best next step if you want to discuss your individual health concerns and goals.",
    options: [],
  },
  "assessment-link": { text: "", options: [] },
  "yoga-link": { text: "", options: [] },
  "conditions-link": { text: "", options: [] },
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "bot", text: flows.start.text },
  ]);
  const [options, setOptions] = useState<Option[]>(flows.start.options);
  const [count, setCount] = useState(1);

  function choose(option: Option) {
    setMessages((current) => [
      ...current,
      { id: count + 1, role: "user", text: option.label },
    ]);

    if (option.href) {
      setCount((v) => v + 1);
      setTimeout(() => window.location.assign(option.href!), 120);
      return;
    }

    const flow = flows[option.next];
    if (!flow) return;

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: count + 2, role: "bot", text: flow.text },
      ]);
      setOptions(flow.options);
      setCount((v) => v + 2);
    }, 180);
  }

  function restart() {
    setMessages([{ id: 1, role: "bot", text: flows.start.text }]);
    setOptions(flows.start.options);
    setCount(1);
  }

  return (
    <>
      {open && (
        <section className="sutra-chatbot" aria-label="Sutra Health Assistant">
          <header className="sutra-chatbot__header">
            <div>
              <span className="sutra-chatbot__eyebrow">SUTRA HEALTH</span>
              <strong>Health Assistant</strong>
            </div>
            <button aria-label="Close chatbot" onClick={() => setOpen(false)}>×</button>
          </header>

          <div className="sutra-chatbot__messages">
            {messages.map((message) => (
              <div key={message.id} className={`sutra-chatbot__message sutra-chatbot__message--${message.role}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="sutra-chatbot__options">
            {options.map((option) => (
              <button key={option.label} onClick={() => choose(option)}>
                {option.label}
              </button>
            ))}
          </div>

          <footer className="sutra-chatbot__footer">
            <button onClick={restart}>Start over</button>
            <span>General information only</span>
          </footer>
        </section>
      )}

      <button
        className="sutra-chatbot__launcher"
        aria-label={open ? "Close Sutra Health Assistant" : "Open Sutra Health Assistant"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sutra-chatbot__launcher-icon">✦</span>
        <span className="sutra-chatbot__launcher-text">Ask Sutra</span>
      </button>
    </>
  );
}
