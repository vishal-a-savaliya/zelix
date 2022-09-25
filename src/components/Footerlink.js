import React from 'react'
import { motion } from 'framer-motion'

function Footerlink({ name, link }) {
    return (
        <motion.li
            whileHover={{ scale: 1.2, originX: 0 }}
            transition={{ type: "spring", stiffness: 150 }}
        >
            <a className="text-gray-700 transition hover:text-primary" href={link}>
                {name}
            </a>
        </motion.li>
    )
}

export default Footerlink