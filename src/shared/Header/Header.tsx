import React from 'react'
import SearchBlock from './SearchBlock/SearchBlock'
import SortBlock from './SortBlock/SortBlock'
import ThreadTitle from './ThreadTitle/ThreadTitle'

import styles from './header.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<SearchBlock />
			<ThreadTitle />
			<SortBlock />
		</header>
	)
}

export default Header
