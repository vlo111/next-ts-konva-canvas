import React, {useState} from "react";
import {NextPage} from "next";
import Layer from './layer'
import { Stage } from "react-konva";
import Konva from "konva";

const Schema: NextPage = () => {

    const [stageScale, setStageScale] = useState<number>(1);

    const [stageX, setStageX] = useState<number>(0);

    const [stageY, setStageY] = useState<number>(0);

    const [editableText, setEditableText] = useState<number>(0);

    const handleWheel = (event: Konva.KonvaEventObject<WheelEvent>) => {
        const { target, evt: { deltaY } } = event;

        const scaleBy = 1.02;

        const stage = target.getStage();

        if (stage) {

            const { x, y } = stage.getPointerPosition()!;

            const oldScale = stage.scaleX();

            if (x && y) {
                const mousePointTo = {
                    x: x / oldScale - stage.x() / oldScale,
                    y: y / oldScale - stage.y() / oldScale
                };

                const newScale = deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

                setStageScale(newScale);

                setStageX(-(mousePointTo.x - x / newScale) * newScale);

                setStageY(-(mousePointTo.y - y / newScale) * newScale);
            }
        }
    }

    return (
        <Stage
            x={stageX}
            style={{border: '1px solid red'}}
            onWheel={(event: Konva.KonvaEventObject<WheelEvent>) => handleWheel(event)}
            onClick={(e: Konva.KonvaEventObject<MouseEvent>) => {
                if (e.target.nodeType === 'Stage') {
                    setEditableText(0);
                }
            }}
            y={stageY}
            scaleX={stageScale}
            scaleY={stageScale}
            width={window.innerWidth - 50}
            height={window.innerHeight - 100}
            draggable
        >
            <Layer editableText={editableText} setEditable={(value: number) => {
                setEditableText(value);
            }} />
        </Stage>
    );
}

export default Schema;
