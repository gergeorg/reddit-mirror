import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

interface IUserData {
	name?: string
	iconImg?: string
}

export const useUserData = () => {
	const [data, setData] = useState<IUserData>({})
	const token = useContext(tokenContext)

	useEffect(() => {
		if (!token || token === 'undefined') return
		axios
			.get('https://oauth.reddit.com/api/v1/me.json', {
				headers: { Authorization: `bearer ${token}` },
			})

			.then((resp) => {
				const userData = resp.data
				const icon = userData.icon_img.split('?')[0]

				setData({ name: userData.name, iconImg: icon })
			})
			.catch(console.log)
	}, [token])

	return [data]
}
