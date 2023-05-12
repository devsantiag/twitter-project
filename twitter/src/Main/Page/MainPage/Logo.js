// bird logo page

import React from "react"

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            birdLogo: true
        }
    }
    render() {
        const { birdLogo } = this.state

        return (
            <div>
                {birdLogo && (
                    <header>
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="logo" className="logo-size-style" />
                    </header>
                )}
            </div>
        )
    }
}
export default Logo
