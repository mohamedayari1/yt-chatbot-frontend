import { ChatMessage } from "@/lib/types";
import { motion } from "framer-motion";
import { SparklesIcon } from "../icons";

interface MessageBubbleProps {
  message: ChatMessage;
  isLoading?: boolean;
  onEdit?: (messageId: string, newText: string) => void;
}

export default function MessageBubble({
  message,
  isLoading = false,
  onEdit,
}: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  const textContent = message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ");

  return (
    <motion.div>
      <div
        className={`flex gap-4 w-full ${
          isUser ? "ml-auto max-w-2xl" : "w-full"
        }`}
      >
        {isAssistant && (
          <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border bg-background">
            <div className="translate-y-px">
              <SparklesIcon size={14} />
            </div>
          </div>
        )}

        {/* Message bubble */}

        <div
          data-testid="message-content"
          className={`flex flex-col gap-4 ${
            isUser
              ? "bg-primary text-primary-foreground px-3 py-2 rounded-xl"
              : "bg-muted px-3 py-2 rounded-xl"
          }`}
        >
          <div className="whitespace-pre-wrap">{textContent}</div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <div className="animate-spin">⏳</div>
            <span>Thinking...</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
