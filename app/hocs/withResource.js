import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const withResource = (
  resources,
  WrappedComponent
) => {

  const mapStateToProps = state => {
    let stateProperties = {}

    resources.forEach(res => {
      switch(res.length) {
        case 1:
          stateProperties[res[0]] = state[res[0]]
          break
        case 2:
          stateProperties[res[0]] = state[res[1]]
          break
        case 3:
          stateProperties[res[0]] = state[res[1]][res[2]]
          break
        default:
          throw new Error("invalid resources param passed")
      }
    })

    return stateProperties
  }

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}

export default withResource
