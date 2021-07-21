import React from "react";
import Input from "../Input";
import Button from "../Button";

import "./styles.scss"

export default () => {
    return (
        <form className="search">
            <Input type="text" title="Find your movie..."/>
            <Button title="SEARCH" style="button--accent"/>
        </form>
    )

}