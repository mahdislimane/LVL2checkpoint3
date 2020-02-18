import React from "react";

function ListItem() {
     const juce = ["pina colada", "full moon", "the virgin"];
  const bestJuce = juce.map(juce => <li>{juce}</li>);
  return <ul>{bestJuce}</ul>;
}
export default ListItem;
