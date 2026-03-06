import { SquareCheck } from "lucide-react";

interface HeaderProps {
  taskCount: number;
}

export default function Header({ taskCount }: HeaderProps) {
  return (
    <>
      <h1>
        Simple{" "}
        <SquareCheck
          className="text-purple-600 inline size-7"
          strokeWidth={2.5}
        />{" "}
        <br />
        TODO List
      </h1>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {taskCount} tasks remaining
      </p>
    </>
  );
}
