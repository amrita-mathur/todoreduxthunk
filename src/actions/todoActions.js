import axios from "axios";

export const listTodos = () => async (dispatch) => {
  try {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        dispatch({
          type: "TODO_LIST",
          payload: data,
        });
      });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchTodoById = (id) => {
  return async function (dispatch) {
    try {
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          dispatch({
            type: "SINGLE_TODO",
            payload: data,
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};
