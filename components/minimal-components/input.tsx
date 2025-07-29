import cx from "classnames";
import { ArrowUpIcon } from "../icons";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
}

export default function ChatInput({ input, setInput }: ChatInputProps) {

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("kachta event 1.0 input", e.target.value);
    setInput(e.target.value);
  };


  return (
    <div className="relative w-full flex flex-col gap-4">
      <Textarea
        className={cx(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10"
        )}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
      />

      <SendButton />
    </div>
  );
}

function SendButton() {
  return (
    <div className="absolute bottom-0 right-0 p-2">
      <Button className="rounded-full p-1.5 h-fit border">
        <ArrowUpIcon size={16} />
      </Button>
    </div>
  );
}
