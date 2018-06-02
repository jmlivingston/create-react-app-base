import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

// import { Button, Tooltip } from 'components/Common'
import config from '../../config'

storiesOf('Tooltip', module)
  .addDecorator(config.wrapper)
  .add(
    'Multi',
    withInfo(config.defaults.info)(() => (
      // <span>
      // <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
      //   {this.props.item.text}
      // </Button>
      // <Tooltip
      //   placement={this.props.item.placement}
      //   isOpen={this.state.tooltipOpen}
      //   target={'Tooltip-' + this.props.id}
      //   toggle={this.toggle}>
      //   Tooltip Content!
      // </Tooltip>
      // </span>
      <div>todo</div>
    ))
  )

// class TooltipExampleMulti extends React.Component {
// constructor(props) {
//   super(props)

//   this.state = {
//     tooltips: [
//       {
//         placement: 'top',
//         text: 'Top'
//       },
//       {
//         placement: 'bottom',
//         text: 'Bottom'
//       },
//       {
//         placement: 'left',
//         text: 'Left'
//       },
//       {
//         placement: 'right',
//         text: 'Right'
//       }
//     ]
//   }
// }

// render() {
//   return (
//     <div>
//       {this.state.tooltips.map((tooltip, i) => {
//         return <TooltipItem key={i} item={tooltip} id={i} />
//       })}
//     </div>
//      ))
//   )
