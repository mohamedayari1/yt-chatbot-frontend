import cx from "classnames";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ArrowUpIcon } from "../icons";

export default function Input() {
  return (
    <div className="relative w-full flex flex-col gap-4">
      <Textarea
        className={cx(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10",
        )}
        placeholder="Send a message..."
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
