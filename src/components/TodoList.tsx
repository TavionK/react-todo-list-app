interface TodoListProps {
  totalTasks: number;
}

export default function TodoList({ totalTasks }: TodoListProps) {
  return (
    <>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {totalTasks} total items
      </p>
    </>
  );
}
