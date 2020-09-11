import axios from "axios";
const initialTodos = [
  {
    id: 1,
    text: "Todo1",
    done: true,
  },
  {
    id: 2,
    text: "Todo2",
    done: false,
  },
  {
    id: 3,
    text: "Todo333333",
    done: false,
  },
  {
    id: 4,
    text: "Todo4 Todo4 Todo4 Todo4 Todo4 Todo4 Todo4 Todo4 Todo4 Todo4 ",
    done: false,
  }
];

class TodoRepository {
  getInitialTodo() {
    console.log("initial");
    return initialTodos;
  }
}

export default new TodoRepository();
