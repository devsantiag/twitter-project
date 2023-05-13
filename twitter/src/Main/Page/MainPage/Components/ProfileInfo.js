import React from "react";

// components
import UserChecked from "./UserChecked";

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Santiago',
            nickName: '@devsantiag',
            userImg: 'https://pbs.twimg.com/profile_images/1644894643660759040/J4whV6qJ_400x400.jpg',
            stamp: <UserChecked/>
        }
    }
}
export default ProfileInfo