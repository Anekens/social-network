import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateEditMode}
                          style={{backgroundColor: '#ffe23b'}}>
                        {props.status || "no status"}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status}
                       onBlur={deactivateEditMode}
                       autoFocus={true}
                       onChange={onStatusChange}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks