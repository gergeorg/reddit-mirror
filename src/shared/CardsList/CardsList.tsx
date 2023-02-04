import React, { useContext } from 'react'
import { postsContext } from '../context/postsContext'
import Card from './Card/Card'

import styles from './cardslist.css'

const CardsList = () => {
	const posts = useContext(postsContext)

	return (
		<ul className={styles.cardsList}>
			{/* {posts.map((post) => (
				<Card key={post.data.id} post={post.data} />
			))} */}
			{/* <Card /> */}
		</ul>
	)
}

export default CardsList

// id = { id }
// title = { title }
// text = { selftext }
// cardImg = { thumbnail }
// numComments = { num_comments }
// createdAt = { created_utc }
// authorName = { author }
// avatar = { icon_img }
// karma = { score }
// contentCategories = { content_categories }
