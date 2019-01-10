import React from 'react'
import BubbleChart from '@weknow/react-bubble-chart-d3';

class BubbleGraph extends React.Component {

    render () {
      return (
        <div>
            <BubbleChart
  graph= {{
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
  }}
  width={900}

  showLegend={false} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 12,
        color: '#000',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 12,
        color: '#fff',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
  //Custom bubble/legend click functions such as searching using the label, redirecting to other page
  data={this.props.items}
/>

        </div>
      )
    }
}
  
export default BubbleGraph