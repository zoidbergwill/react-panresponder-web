import PanResponder from './src/PanResponder'
import ResponderEventPlugin from './src/ResponderEventPlugin'
import { injectEventPluginsByName } from 'react-native-renderer/lib/EventPluginRegistry'

// Add responder events
injectEventPluginsByName({ ResponderEventPlugin })

export default PanResponder
