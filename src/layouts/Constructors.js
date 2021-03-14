import { Component } from 'react'
import axios from 'axios'
import Waiting from '../components/Waiting'

const Constructor = ({ element }) => {
  return (
    <tr>
      <td className="p-2">{ element.position }</td>
      <td className="p-2">{ element.Constructor.name }</td>
      <td className="p-2">{ element.Constructor.nationality }</td>
      <td className="p-2 text-center">{ element.wins }</td>
      <td className="p-2">{ element.points }</td>
    </tr>
  )
}

class Constructors extends Component {
  state = {
    constructors: []
  }

  componentDidMount() {
    axios.get(`https://ergast.com/api/f1/current/constructorStandings.json`)
    .then(res => {
      const constructors = res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      this.setState({ constructors })
    })
  }

  render() {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left text-gray-500 px-2">
            <th className="p-2 font-normal">Pos</th>
            <th className="p-2 font-normal">Équipe</th>
            <th className="p-2 font-normal">Pays</th>
            <th className="text-center">🥇</th>
            <th className="p-2 font-normal">Points</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
        {
          this.state.constructors.length ?
          this.state.constructors.map(constructor => <Constructor key={constructor.position} element={constructor} /> ) :
          <Waiting rows={10} columns={5} />
        }
        </tbody>
      </table>
    ) 
  }
}

export default Constructors
