import "./App.css";
import IndexBarList from "./indexBarList";

function App() {
  const data = [
    {
      index: "A",
      data: ["Apple", "Apricot", "Avocado"],
    },
    {
      index: "B",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "C",
      data: ["Cherry", "Coconut"],
    },
    {
      index: "D",
      data: ["Date"],
    },
    {
      index: "F",
      data: ["Fig"],
    },
    {
      index: "E",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "G",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "H",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "I",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "J",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "K",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "L",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "M",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "N",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },

    {
      index: "O",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "P",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "Q",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "R",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "S",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "T",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "U",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "V",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "W",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },

    {
      index: "X",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "Y",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
    {
      index: "Z",
      data: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
    },
  ];
  return (
    <div className="App">
      <IndexBarList data={data} />
    </div>
  );
}

export default App;
