import React from 'react'

import styles from './textcontent.css'

const TextContent = () => {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<div className={styles.userLink}>
					<img className={styles.avatar} src='https://thispersondoesnotexist.com/image' alt='avatar' />
					<a className={styles.username} href='#user-url'>
						Дмитрий Гришин
					</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>4 часа назад
				</span>
			</div>
			<h2 className={styles.title}>
				<a className={styles.postLink} href='#post-url'>
					Следует отметить, что новая модель организационной деятельности поможет
				</a>
			</h2>
		</div>
	)
}

export default TextContent
