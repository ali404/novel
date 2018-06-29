import notesSaga from './notes'
import notebooksSaga from './notebooks'
import globals from './globals'

const rootSaga = [notesSaga, notebooksSaga, globals]
export default rootSaga