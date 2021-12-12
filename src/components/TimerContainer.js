import React from 'react';
import Timer from './Timer';
import { setStatus} from '../redux/timerReducer';
import { connect } from 'react-redux';

class TimerClass extends React.Component {

    render() {
        return <div>
            <Timer {...this.props} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.timer.status,
    }
};

const TimerContainer = connect(mapStateToProps, {
    setStatus,
})(TimerClass);

export default TimerContainer;