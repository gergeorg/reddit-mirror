import React from 'react'
import IconAnon from '../../../Icon/IconAnon'
import Text, { EColor } from '../../../Text/Text'
import styles from './userblock.css'

interface IUserBlockProps {
	avatarSrc?: string
	username?: string
}

const UserBlock = ({ avatarSrc, username }: IUserBlockProps) => {
	return (
		<a
			href='https://www.reddit.com/api/v1/authorize?client_id=btX25b6_D5UKiUmCw9luZw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit'
			className={styles.userBox}
		>
			<div className={styles.avatarBox}>
				{avatarSrc ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} /> : <IconAnon />}
			</div>

			<div className={styles.username}>
				{/* <Break size={12} /> */}
				<Text size={20} color={username ? EColor.black : EColor.grey99}>
					{username || 'Аноним'}
				</Text>
			</div>
		</a>
	)
}

export default UserBlock
