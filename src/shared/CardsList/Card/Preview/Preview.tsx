import React from 'react'
import styles from './preview.css'

const Preview = () => {
	return (
		<div className={styles.preview}>
			<img
				className={styles.previewImg}
				src='https://cdn.dribbble.com/userupload/4239208/file/original-8fb0844d775bcb5b14eb2b76367f352e.png?compress=1&resize=752x564'
				alt='previewImg'
			/>
		</div>
	)
}

export default Preview
