import React from 'react'
import { IPostData, usePostsData } from '../../hooks/usePostsData'

interface IPostsContextData {
	// posts?: any[]
}

export const postsContext = React.createContext<IPostData[]>([])

export const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [posts] = usePostsData()
	return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}
