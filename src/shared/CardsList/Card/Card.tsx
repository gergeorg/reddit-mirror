import React from 'react'
import styles from './card.css'

import Controls from './Controls/Controls'
import Menu from './Menu/Menu'
import Preview from './Preview/Preview'
import TextContent from './TextContent/TextContent'

interface ICardProps {
	authorName: string
	createdAt: number
	title: string
	postUrl: string
	previewImg: string
	commentsNumber: number
	karma: number
}

const Card = (props: ICardProps) => {
	const {
		authorName,
		createdAt, // meta data
		title,
		postUrl, // title
		previewImg, // preview
		commentsNumber,
		karma,
	} = props

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
