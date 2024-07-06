import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calaries: 95 },
    { id: 2, name: "orange", calaries: 45 },
    { id: 3, name: "banana", calaries: 105 },
    { id: 4, name: "coconut", calaries: 159 },
    { id: 5, name: "pineapple", calaries: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calaries: 110 },
    { id: 7, name: "celery", calaries: 15 },
    { id: 8, name: "carrots", calaries: 25 },
    { id: 9, name: "corn", calaries: 63 },
    { id: 10, name: "brocolli", calaries: 50 },
  ];
  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  );
}

export default App;
