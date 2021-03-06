import React, { useCallback, useEffect, useState } from "react";
import getOrigami from "../../utils/origami";
import Origam from "../origam";
import styles from "./index.module.css";

const Origamis = (props) => {

    const [origamis, setOrigamis] = useState([]);
    
    const getOrigamis = useCallback(async () => {
        const origamis = await getOrigami(props.length);

        setOrigamis(origamis);

    }, [props.length]);

    const renderOrigamis = () => {

        return origamis.map((origam, index) => {
            return (
                <Origam key={origam._id} index={index} {...origam} />
            )
        })
    }

    useEffect(() => {
        getOrigamis()
    }, [getOrigamis, props.updatedOrigami]);

    return (
        <div className={styles["origamis-wrapper"]}>
            {renderOrigamis()}
        </div>
    )
}

export default Origamis