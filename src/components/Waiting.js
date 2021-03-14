const Waiting = ({ rows, columns }) => {
  return Array.from(Array(rows), (row, i) =>
    <tr key={i}>
      { Array.from(Array(columns), (column, i) => <th key={i} className="h-10"></th> ) }
    </tr>  
  )
}

export default Waiting