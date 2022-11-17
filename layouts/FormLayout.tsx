import { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

export function FormLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">{children}</div>
    </div>
  );
}
