import React, {Component} from "react";
import "./SidebarArrow.scss";

class SidebarArrow extends Component {

    render () {
        return ( 
            <div className="SidebarArrow" onClick={this.props.onClick}>
                <p>&lt;</p>
            </div>
        );
    }
}

export default SidebarArrow;