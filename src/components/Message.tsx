import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessagesProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessagesProps) => {
  return (
    <div
      className={cn(
        "rounded-lg shadow-md transition-colors duration-300 mb-4",
        {
          "bg-zinc-700 hover:bg-zinc-600": isUserMessage, // Subtle hover effect for user messages
          "bg-zinc-800 hover:bg-zinc-700": !isUserMessage, // Subtle hover effect for bot messages
        }
      )}
    >
      <div className="p-4">
        <div className="max-w-3xl mx-auto flex items-start gap-3">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-600 bg-zinc-900 flex justify-center items-center transition-transform transform hover:scale-105",
              {
                "bg-zinc-800 border-blue-500": isUserMessage, // Subtle avatar color for the user
                "bg-zinc-900 border-purple-500": !isUserMessage, // Subtle avatar color for the bot
              }
            )}
          >
            {isUserMessage ? (
              <User className="size-5 text-gray-200" />
            ) : (
              <Bot className="size-5 text-gray-200" />
            )}
          </div>

          <div className="flex flex-col w-full">
            <span className="text-sm font-semibold text-gray-300 mb-1">
              {isUserMessage ? "You" : "Website"}
            </span>
            <p className="text-sm font-normal text-gray-200 bg-transparent py-2 px-4 rounded-lg leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
