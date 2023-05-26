import React from "react";

// components
import UserChecked from "./UserChecked";

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nickName: '',
            userImg: '',
            stamp: <UserChecked />
        }
    }
    render(){
        return
    }
}
export default ProfileInfo