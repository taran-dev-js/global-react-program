import React from "react";
import {Input, Button} from "../../components";

import "./styles.scss"

export const Search = () => {
    return (
        <form className="search">
            <Input type="text" title="Find your movie..."/>
            <Button title="SEARCH" style="button--accent"/>
        </form>
    )

}