// import { Chat } from "@/components/chat";
import { Chat } from "@/components/minimal-components/chat";

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const Page = () => {
  const id = generateUUID();

  return (
    //   <Chat
    //   key={id}
    //   id={id}
    //   initialMessages={[]}
    //   initialChatModel='chat-model'
    //   initialVisibilityType="private"
    //   isReadonly={false}
    //   // session={session}
    //   autoResume={false}
    // />
    <Chat />

  );
};

export default Page;
