import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes'

render(routes, document.getElementById('root'))
registerServiceWorker()
