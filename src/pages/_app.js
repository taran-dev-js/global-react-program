import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from '../app/store/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}