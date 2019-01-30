import React, {Component} from 'react'

class PercentageBar extends Component {
  render() {
    const {percentage} = this.props
    return (<div className="stat-bar">
      <div className="stat-bar-res" style={{
          width: `${percentage}%`
        }}></div>
    </div>)
  }
}

export default PercentageBar
