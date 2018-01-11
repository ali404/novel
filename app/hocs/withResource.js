import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const withResource = (
  resourceName,
  resource,
  id = undefined,
  WrappedComponent
) => {

  const mapStateToProps = state => ({
    [resourceName]: id ? state[resource][id] : state[resource]
  })

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}

export default withResource
