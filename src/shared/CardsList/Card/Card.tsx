import React from 'react'
import styles from './card.css'

import Controls from './Controls/Controls'
import Menu from './Menu/Menu'
import Preview from './Preview/Preview'
import TextContent from './TextContent/TextContent'

const Card = () => {
	return (
		<li className={styles.card}>
			<TextContent />

			<Preview />

			<Menu />

			<Controls />
		</li>
	)
}

export default Card
