import { createStore, applyMiddleware, compose } from 'redux';
import creatSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import history from '../services/history';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = creatSagaMiddleware({ sagaMonitor });

export default function configureStore() {
  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      console.tron.createEnhancer()
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
