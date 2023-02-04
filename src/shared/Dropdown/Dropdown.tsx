import React, { useEffect, useState } from 'react'
import styles from './dropdown.css'

interface IDropdownProps {
	button: React.ReactNode
	children: React.ReactNode
	isOpen?: boolean
	onOpen?: () => void
	onClose?: () => void
}

const NOOP = () => {}

const Dropdown = ({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) => {
	const [isDorpdownOpen, setIsDorpdownOpen] = useState(isOpen)

	useEffect(() => setIsDorpdownOpen(isOpen), [isOpen])
	useEffect(() => (isDorpdownOpen ? onOpen() : onClose()), [isDorpdownOpen])

	const handleOpen = () => {
		if (isOpen === undefined) {
			setIsDorpdownOpen(!isDorpdownOpen)
		}
	}

	return (
		<div className={styles.container}>
			<div onClick={handleOpen}>{button}</div>
			{isDorpdownOpen && (
				<div className={styles.listContainer}>
					<div className={styles.list} onClick={() => setIsDorpdownOpen(false)}>
						{children}
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown
