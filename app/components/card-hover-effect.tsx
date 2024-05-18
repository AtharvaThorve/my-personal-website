"use client";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

interface LinkProps {
  label: string;
  url?: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    links: LinkProps[];
    badges: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const parseBodyText = (text: string) => <ReactMarkdown children={text} />;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative p-2">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col h-full">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{parseBodyText(item.description)}</CardDescription>
                <div className="flex justify-center space-x-4 mt-4">
                  {item.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-[3px] relative" disabled={link?.url === undefined}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-4 py-1 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                          {link.label}
                        </div>
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
            <div className="bg-gray-300 rounded-b-2xl p-4 flex flex-wrap gap-2 pz-20 group-hover:border-slate-700 relative">
              {item.badges.map((badge) => (
                <span key={badge} className="bg-gray-500 text-white rounded-full px-2 py-1 text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col rounded-t-3xl", // Updated rounded-3xl
        className
      )}
    >
      <div className="relative z-50 flex-grow">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
