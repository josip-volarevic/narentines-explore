import React from 'react'

export const getMapItemPositionStyles = (top: number, left: number, scale: number): React.CSSProperties => ({
	top: `${top * 100}%`,
	left: `${left * 100}%`,
	position: 'absolute',
	transform: `translateX(-50%) scale(${1 / scale})`,
	zIndex: 1,
})
