"use client";

import { ChatMessage } from "@/lib/types";
import ChatInput from "./input";
import Conversation from "./messages";
import { useState } from "react";

export function Chat({ messages }: { messages: ChatMessage[] }) {
  const [input, setInput] = useState('');

  return (
    <main>
      <Conversation
        messages={messages} // Make sure this is always an array
        isLoading={false}
      />
      <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <ChatInput input={input} setInput={setInput} />
      </form>
    </main>
  );
}
