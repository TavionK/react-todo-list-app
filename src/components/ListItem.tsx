import type { Task } from "../utils/tasks.ts";

interface ListItemProps {
  listItem: Task;
}

export default function ListItem({ listItem }: ListItemProps) {
  return <li>{listItem.text}</li>;
}
