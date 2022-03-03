import { Group } from "react-konva";
import React, {useState} from "react";
import Konva from "konva";
import Circle from '../figure/Circle'
import EditableText from '../figure/Text'
import { IEditable } from "../../../../types/schema";

const Nodes = ({setEditable, editableText}: IEditable) => {

    const generateCircles = () => {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                id: 'node-' + i,
                rotation: Math.random() * 180,
                isDragging: false,
                color: Konva.Util.getRandomColor(),
                name: 'Lorem Ipsum is simply dummy text of the printing. ' + i,
            });
        }
        return items;
    }

    const handleDragStart = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const id = e.target.id();
        setNodes(
            nodes.map((node) => {
                return {
                    ...node,
                    isDragging: node.id === id
                };
            })
        );
    };

    const handleDragEnd = () => {
        setNodes(
            nodes.map((node) => {
                return {
                    ...node,
                    isDragging: false
                };
            })
        );
    };

    const INITIAL_STATE = generateCircles();

    const [nodes, setNodes] = useState(INITIAL_STATE);

    return (
        <>
            {nodes.map((node) => (
                <Group key={node.id} draggable>
                    <Circle
                        node={node}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                    />
                    <EditableText
                        name={node.name}
                        x={node.x - 35}
                        y={node.y - 35}
                        width={80}
                        height={65}
                        lineHeight={1.2}
                        editableText={editableText}
                        setEditable={setEditable}
                    />
                </Group>
            ))}
        </>
    );
}

export default Nodes;
