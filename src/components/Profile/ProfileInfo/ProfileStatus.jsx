import React from 'react';


class ProfileStatus extends React.Component {

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.state !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}
                          style={{backgroundColor: '#ffe23b'}}>
                        {this.props.status || "no status"}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           onBlur={this.deactivateEditMode}
                           autoFocus={true}
                           onChange={this.onStatusChange}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus