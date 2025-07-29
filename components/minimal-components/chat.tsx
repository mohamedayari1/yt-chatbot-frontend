import { ChatMessage } from "@/lib/types";
import Input from "./input";
import Conversation from "./messages";

export function Chat({ onMessages }: { onMessages: ChatMessage[] }) {
  return (
    <main>
      <Conversation
        messages={onMessages} // Make sure this is always an array
        isLoading={false}
      />
      <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <Input />
      </form>
    </main>
  );
}
