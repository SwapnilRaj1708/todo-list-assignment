import { RxCross1 } from "react-icons/rx";
import { Todo } from "../types/todo";
import "./OpenTodo.css";

export default function OpenTodo({
  item,
  index,
  openListToggle,
  deleteTodo,
}: {
  item: Todo;
  index: number;
  openListToggle: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <div className="todo-item" key={index}>
      <input
        type="checkbox"
        name="todo"
        id="todo"
        className="todo-checkbox"
        checked={item.completed}
        onChange={() => openListToggle(item.id)}
      />
      <label
        htmlFor="todo"
        className={`todo-label ${item.completed ? "--strikeout" : ""}`}
      >
        {item.title}
      </label>
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
