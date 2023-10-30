import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="h1-bold">Next 14</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
