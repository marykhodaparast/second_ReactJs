import PropTypes from 'prop-types';
function List(props) {
//   const fruits = [
//     { id: 1, name: "apple", calaries: 95 },
//     { id: 2, name: "orange", calaries: 45 },
//     { id: 3, name: "banana", calaries: 105 },
//     { id: 4, name: "coconut", calaries: 159 },
//     { id: 5, name: "pineapple", calaries: 37 },
//   ];

  //fruits.sort((a,b) => a.name.localeCompare(b.name));ALPHABETICAL
  //fruits.sort((a,b) => b.name.localeCompare(a.name));REVERSE ALPHABETICAL
  //fruits.sort((a,b) => a.calaries - b.calaries);NUMERIC ORDER
  //fruits.sort((a, b) => b.calaries - a.calaries); //REVERSE NUMERIC ORDER

  //const lowCalFruits = fruits.filter(fruit => fruit.calaries < 100)
  //const highCalFruits = fruits.filter(fruit => fruit.calaries >= 100)

  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calaries}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.propTypes = {
   category: PropTypes.string,
   items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                             name: PropTypes.string,
                                             calaries: PropTypes.number
   }))
}
List.defaultProps = {
   category: "Category", 
   items: []
}

export default List;
