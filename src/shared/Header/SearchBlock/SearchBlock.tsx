import React, { useContext } from 'react'
import { useUserData } from '../../../hooks/useUserData'
import { userContext } from '../../context/userContext'
import styles from './searchblock.css'
import UserBlock from './UserBlock/UserBlock'

const SearchBlock = () => {
	const { iconImg, name } = useContext(userContext)
	return (
		<div className={styles.searchBlock}>
			<UserBlock avatarSrc={iconImg} username={name} />
		</div>
	)
}

export default SearchBlock
