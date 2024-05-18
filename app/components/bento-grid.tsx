import { cn } from "../utils/cn";
import ReactMarkdown from "react-markdown";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 p-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const CustomListItem = ({ children }: { children?: React.ReactNode }) => (
  <li className="mt-2 first:mt-4">{children}</li>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}) => {
  const parseBodyText = (text: string | undefined) => (
    <ReactMarkdown
      children={text}
      components={{
        a: ({ node, ...props }) => (
          <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          />
        ),
        li: CustomListItem,
      }}
    />
  );
  return (
    <div
      className={cn(
        "w-full h-full relative bg-gray-700/40 hover:bg-gray-600/40 rounded-xl p-8 flex flex-col justify-between gap-6 backdrop-blur-sm",
        className
      )}
      style={{
        opacity: 1,
        transform: "translate(0px)",
        transition:
          "background-color 250ms ease 0s, opacity 1s ease 0s, transform 1s ease 0s",
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {image ? (
          <div className="flex flex-col justify-center items-center">
            <img
              src={image}
              alt={title}
              className="rounded-xl mb-8"
              loading="lazy"
              decoding="async"
              width={200}
              height={200}
            />
            <div className="font-sans font-normal text-xl text-neutral-300 text-center">
              {parseBodyText(description)}
            </div>
          </div>
        ) : (
          <>
            <div className="font-sans font-bold text-3xl text-teal-500 mb-4">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-300">
              {parseBodyText(description)}
            </div>
          </>
        )}
      </div>
      <hr className="border-yellow-400 " />
    </div>
  );
};
