// @flow

import { ProfileScreen } from './ProfileScreen';
import { connect } from 'react-redux';
import { plus, minus } from '../../actions/counterActions';

import type { DefaultReduxProps } from '../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../reducers/rootReducers';

type ReduxProps = {
  counter: number,
};

type DispatchProps = {
  onPlus: () => any,
  onMinus: () => any,
};

export type ProfileScreenProps = ReduxProps & DispatchProps & DefaultReduxProps;

function mapStateToProps(store: AppState): ReduxProps {
  return {
    counter: store.counter.count,
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {
    onPlus: () => dispatch(plus()),
    onMinus: () => dispatch(minus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
