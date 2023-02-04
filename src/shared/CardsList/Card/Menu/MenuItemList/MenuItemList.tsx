import React from 'react'
import CommentButton from '../../../../Icon/CommentButton'
import ComplainButton from '../../../../Icon/ComplainButton'
import HideButton from '../../../../Icon/HideButton'
import SaveButton from '../../../../Icon/SaveButton'
import ShareButton from '../../../../Icon/ShareButton'
import Text, { EColor } from '../../../../Text/Text'
import styles from './menuitemlist.css'

interface IMenuItemListProps {
	postId: string
}

const MenuItemList = ({ postId }: IMenuItemListProps) => {
	return (
		<ul className={styles.menuItemsList}>
			<li className={styles.menuItem}>
				<CommentButton />
				<Text size={14} color={EColor.grey99}>
					Комментарии
				</Text>
			</li>

			<div className={styles.divider}></div>

			<li className={styles.menuItem}>
				<ShareButton />
				<Text size={14} color={EColor.grey99}>
					Поделиться
				</Text>
			</li>

			<div className={styles.divider}></div>

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<HideButton />
				<Text size={14} color={EColor.grey99}>
					Скрыть
				</Text>
			</li>

			<div className={styles.divider}></div>

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<SaveButton />
				<Text size={14} color={EColor.grey99}>
					Сохранить
				</Text>
			</li>

			<div className={styles.divider}></div>

			<li className={styles.menuItem}>
				<ComplainButton />
				<Text size={14} color={EColor.grey99}>
					Пожаловаться
				</Text>
			</li>
		</ul>
	)
}

export default MenuItemList
