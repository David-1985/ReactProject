import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    liststyle: "none",
    // margin: 0,
    // padding: 0
  },
};

export default () => {
  return (
    <ul style={styles.ul}>
      <TodoItem />
      <li>2</li>
    </ul>
  );
};
