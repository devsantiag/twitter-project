// description about this file

import React from "react";
import UserChecked from "./Components/UserChecked";

class DirectProfile extends React.Component {
    render() {
        const { profileInfo } = this.props;
        
        return (
            <div>
                <UserChecked/>
            </div>
        );
    }
}

export default DirectProfile;
