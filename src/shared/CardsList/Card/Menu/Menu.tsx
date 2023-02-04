import React from 'react'
import Dropdown from '../../../Dropdown/Dropdown'
import MenuIcon from '../../../Icon/MenuIcon'
import styles from './menu.css'
import MenuItemList from './MenuItemList/MenuItemList'

const Menu = () => {
	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}>
						<MenuIcon />
					</button>
				}
			>
				<div className={styles.dropdown}>
					<MenuItemList postId='123' />
				</div>
			</Dropdown>
		</div>
	)
}

export default Menu
