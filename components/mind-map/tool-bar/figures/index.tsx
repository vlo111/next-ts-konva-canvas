import React, {useState} from "react";
import {NextPage} from "next";
import styles from '../../../../assets/styles/schema/ToolBar.module.scss'
import {ReactComponent as AddNodeIcon} from '../../../../assets/images/icons/s_add_node.svg';

const ToolBar: NextPage = ({ children }) => {

    const [figures, setFigures] = useState<boolean>(false);

    return (
        <>
            <button
                className="" onClick={() => {
                setFigures(!figures)
            }}>
                <AddNodeIcon/>
            </button>
            {children}
            {figures &&
                <div className={styles.figures}>
                    figures
                </div>
            }
        </>
    );
}

export default ToolBar;
