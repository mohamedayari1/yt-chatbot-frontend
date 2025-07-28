import Input from "./input";
import Messages from "./messages";

export function Chat() {
  return (
    <main>
      <Messages />
        <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <Input />
      </form>
    </main>
  );
}

