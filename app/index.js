import Inferno from 'inferno'
import Component from 'inferno-component'

class Example extends Component ::
  constructor (props) ::
    super(props)
  render() ::
    return @ <div> Hello there {this.props.input}! </div>

Inferno.render @ <Example input="Friend"/>, document.getElementById @ "app"
