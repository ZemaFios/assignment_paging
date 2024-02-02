'use client';
import { useState } from "react";
import styles from "./debugJson.module.css"
import { 
    FaChevronUp,
    FaChevronDown 
} from "react-icons/fa";

// Client Component.
const DebugJson = ({ content, open = true}) => {

    // State.
    const [active, setActive] = useState(open);

    // Benytter en ternary operator for at sætte Icon efter active true/false.
    let icon = active ? <FaChevronUp  /> :  <FaChevronDown />;
    
    // Benytter en ternary operator for at sætte Style efter active true/false.
    let style = active ? styles.active : '';

    // Template (benytter style, icon og content variablerne).
    return <div className={`${styles.container} ${style}`}>
        <div className={styles.handle} onClick={() => setActive(!active)}>
            {icon} Debug Data
        </div>
        <pre className={styles.content}>
            {JSON.stringify(content, null, 2)}
        </pre>
    </div>

};

// Default Export.
export default DebugJson;