import React from "react";
import { Button } from "reactstrap";

export default function Btn(){

    return(
        <div>
            <Button className="btn" color="primary">
                  Pending
                </Button>
                <br/>
                <br/>
                <Button className="btn" color="success">
                  Resolved
                </Button>
                {/* <Button className="btn" color="success">
                  success
                </Button>
                <br/>
                <br/>
                <Button className="btn" color="info">
                  info
                </Button>  */}
        </div>
    );
}