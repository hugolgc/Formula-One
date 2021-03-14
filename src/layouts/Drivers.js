import { Component } from 'react'
import axios from 'axios'
import Waiting from '../components/Waiting'

const Driver = ({ element }) => {
  return (
    <tr>
      <td className="p-2">{ element.position }</td>
      <td className="p-2">{ element.Driver.permanentNumber }</td>
      <td className="p-2 space-x-2">
        <span>{ element.Driver.givenName }</span>
        <strong>{ element.Driver.familyName }</strong>
      </td>
      <td className="p-2">{ element.Driver.nationality }</td>
      <td className="p-2">{ element.Constructors[0].name }</td>
      <td className="p-2 text-center">{ element.wins }</td>
      <td className="p-2">{ element.points }</td>
    </tr>
  )
}

class Drivers extends Component {
  state = {
    drivers: []
  }

  componentDidMount() {
    axios.get(`https://ergast.com/api/f1/current/driverStandings.json`)
    .then(res => {
      const drivers = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.setState({ drivers })
    })
  }

  render() {
    return (
      <div className="min-w-192 overflow-x">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left text-gray-500 px-2">
              <th className="p-2 font-normal">Pos</th>
              <th className="p-2 font-normal">#</th>
              <th className="p-2 font-normal">Pilote</th>
              <th className="p-2 font-normal">Pays</th>
              <th className="p-2 font-normal">Équipe</th>
              <th className="text-center">🥇</th>
              <th className="p-2 font-normal">Points</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
          {
            this.state.drivers.length ?
            this.state.drivers.map(driver => <Driver key={driver.position} element={driver} /> ) :
            <Waiting rows={20} columns={7} />
          }
          </tbody>
        </table>
      </div>
    ) 
  }
}

export default Drivers
