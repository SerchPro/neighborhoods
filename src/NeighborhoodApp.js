import PropTypes from 'prop-types'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store';



const NeighborhoodApp = props => {
  return (

    <Provider store = { store }>
      <AppRouter />
    </Provider>
  )
}

NeighborhoodApp.propTypes = {}

export default NeighborhoodApp