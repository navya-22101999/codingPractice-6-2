import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main">
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onSearchUserInput}
          value={searchInput}
          placeholder="Search"
          className="input"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          alt="search icon"
          className="srh"
        />
        <ul className="warp">
          {searchResult.map(eachImg => (
            <DestinationItem details={eachImg} key={eachImg.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
