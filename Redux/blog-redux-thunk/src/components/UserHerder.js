import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = (props) => {
    useEffect(() => {
        props.fetchUser();
    }, [])

    return <div className="header">
        {props.user?.name}
    </div>
}
const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(i => i.id === ownProps.userId);
    return { user }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: () => dispatch(fetchUser(ownProps.userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);