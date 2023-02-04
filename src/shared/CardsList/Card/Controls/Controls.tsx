import React from 'react'
import styles from './controls.css'

import KarmaCounter from './KarmaCounter/KarmaCounter'
import SaveButton from './SaveButton/SaveButton'
import ShareButton from './ShareButton/ShareButton'
import СommentsButton from './СommentsButton/СommentsButton'

const Controls = () => {
	return (
		<div className={styles.controls}>
			<KarmaCounter />
			<СommentsButton />

			<div className={styles.actions}>
				<ShareButton />
				<SaveButton />
			</div>
		</div>
	)
}

export default Controls
