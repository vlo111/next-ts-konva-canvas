import React from "react";
import {NextPage} from "next";
import Draggable from 'react-draggable';
import styles from '../../../assets/styles/schema/ToolBar.module.scss'
import { ReactComponent as MenuIcon } from '../../../assets/images/icons/s_menu.svg';

const ToolBar: NextPage = () => {

    return (
        <>
            <Draggable>
                <div className={styles.container}>
                    <MenuIcon />
                    I can now be moved around!
                </div>
            </Draggable>
        </>
    );
}

export default ToolBar;
