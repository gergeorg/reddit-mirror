import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

interface IPostData {
	posts?: any[]
}

export const usePostsData = () => {
	const [posts, setPosts] = useState<IPostData>([])
	const token = useContext(tokenContext)

	useEffect(() => {
		if (token && token.length > 0 && token != 'undefined') {
			axios
				.get('https://oauth.reddit.com/best.json?sr_detail=true', {
					headers: { Authorization: `bearer ${token}` },
				})

				.then((resp) => {
					const postsData = resp.data.data.children
					console.log('postsData: ', postsData)

					// console.log('postsData: ', postsData[0].data.id)

					setPosts(postsData)
				})
				.catch(console.log)
		}
	}, [token])

	return [posts]
}

// const id = postsData.id
// const title = postsData.title
// const text = postsData.selftext
// const cardImg = postsData.thumbnail
// const numComments = postsData.num_comments
// const createdAt = postsData.created_utc
// const authorName = postsData.author
// const avatar = postsData.icon_img
// const karma = postsData.score
// const contentCategories = postsData.content_categories
