/* eslint-disable react/prop-types */
import style from "./Container.module.css";

export default function Container({children}) {
    return(<>
    
        
        <div className={style.Container}>{children}</div>

        </>
        
    );
}

