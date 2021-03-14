import { Component } from 'react'
import axios from 'axios'
import Waiting from '../components/Waiting'

const Race = ({ element }) => {
  return (
    <tr>
      <td className="p-2">{ element.round }</td>
      <td className="p-2">{ (new Date(`${element.date}T${element.time}`)).toDateString() }</td>
      <td className="p-2">{ element.Circuit.circuitName }</td>
      <td className="p-2 space-x-2">
        <span>{ element.Circuit.Location.locality }</span>
        <span>{ element.Circuit.Location.country }</span>
      </td>
    </tr>
  )
}

class Races extends Component {
  state = {
    races: []
  }

  componentDidMount() {
    axios.get(`https://ergast.com/api/f1/current/races.json`)
    .then(res => {
      const races = res.data.MRData.RaceTable.Races
      this.setState({ races })
      console.log(this.state.races)
    })
  }

  render() {
    return (
      <table className="table-auto w-full min-w-192 overflow-x">
        <thead>
          <tr className="text-left text-gray-500 px-2">
            <th className="p-2 font-normal">Pos</th>
            <th className="p-2 font-normal">Date</th>
            <th className="p-2 font-normal">Circuit</th>
            <th className="p-2 font-normal">Pays</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
        {
          this.state.races.length ?
          this.state.races.map(race => <Race key={race.round} element={race} /> ) :
          <Waiting rows={15} columns={5} />
        }
        </tbody>
      </table>
    ) 
  }
}

export default Races
