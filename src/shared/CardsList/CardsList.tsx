import React, { useContext } from 'react'
import { postsContext } from '../context/postsContext'
import Card from './Card/Card'

import styles from './cardslist.css'

const CardsList = () => {
	const posts = useContext(postsContext)

	return (
		<ul className={styles.cardsList}>
			{posts.map((post) => (
				<Card
					key={post.id}
					createdAt={post.created_utc}
					previewImg={post.url}
					title={post.title}
					authorName={post.author}
					commentsNumber={post.num_comments}
					karma={post.ups}
					postUrl={post.permalink}
				/>
			))}
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
