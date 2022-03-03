import { Layer } from "react-konva";
import React from "react";
import Nodes from './graph/Nodes'
import { IEditable } from "../../../types/schema";

const Scheme = ({ setEditable, editableText }: IEditable) => {

    return (
        <Layer>
            <Nodes editableText={editableText} setEditable={setEditable}/>
        </Layer>
    );
}

export default Scheme;
