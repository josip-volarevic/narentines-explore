import React from 'react'

export const getMapElementStyles = (top: number, left: number, zIndex: number, scale: number): React.CSSProperties => ({
	top: `${top * 100}%`,
	left: `${left * 100}%`,
	position: 'absolute',
	transform: `translate(-50%, -50%) scale(${scale})`,
	zIndex,
})
