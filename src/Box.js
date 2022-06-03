import React, {useEffect} from 'react';
import styles from "./App.module.scss";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import Background1 from "./assets/images/background1.jpg";


const Box = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1, x: 0, y:0, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0, x: 200, transition: { duration: 1 } },
    }

    useEffect(() => {
        if(inView){
            control.start("visible")
        } else {
            control.start("hidden");
        }

    }, [control, inView])

    return (
        <motion.div
            className={styles.box}
            variants={boxVariant}
            ref={ref}
            initial="hidden"
            animate={control}
        >
                   <img  src={Background1} alt={"Background1"}/>
                   <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
        </motion.div>
    );
};

export default Box;