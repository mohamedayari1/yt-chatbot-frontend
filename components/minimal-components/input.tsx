import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import cx from 'classnames';



export default function Input() {
  return (
    <div>
      <Textarea
        className={cx(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10",
        )}
      />

        <div>
            <Button>
                Send
            </Button>
        </div>

    </div>
  );
}
