import { RxCross1 } from "react-icons/rx";
import { Todo } from "../types/todo";
import "./CompletedTodo.css";
import { RxReset } from "react-icons/rx";
export default function CompletedTodo({
  item,
  index,
  completedListToggle,
  deleteTodo,
}: {
  item: Todo;
  index: number;
  completedListToggle: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <div className="todo-item" key={index}>
      <label htmlFor="todo" className="todo-label">
        {item.title}
      </label>
      <div onClick={() => completedListToggle(item.id)} className="todo-icon">
        <RxReset />
      </div>
      <div
        onClick={() => {
          deleteTodo(item.id);
        }}
        className="todo-icon"
      >
        <RxCross1 />
      </div>
    </div>
  );
}
