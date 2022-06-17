import React from 'react'
import Image from 'next/image'
import { Box, BoxProps, Button, Dialog, DialogContent, DialogTitle, Typography, Slide, Zoom } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from 'public/assets/vector-icons/close.svg'
import { useToggle } from 'hooks'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children: React.ReactElement },
	ref: React.Ref<unknown>
) {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	if (isMobile) return <Slide direction='up' ref={ref} {...props} />
	return <Zoom in ref={ref} {...props} />
})

export interface MapElementProps extends BoxProps {
	src: string | StaticImageData
	hoverSrc: string | StaticImageData
	title: string
	text: string
}
const MapElement: React.FC<MapElementProps> = ({ src, hoverSrc, title, text, ...props }) => {
	const [isHovered, toggleHover] = useToggle()
	const [isDialogOpen, toggleDialog, , openDialog] = useToggle()

	const isActive = isHovered || isDialogOpen
	if (!hoverSrc || !src) return null

	return (
		<>
			<Box onMouseOver={toggleHover} onMouseOut={toggleHover} onClick={openDialog} className='map-element' {...props}>
				<Image unoptimized src={isActive ? hoverSrc : src} alt='' layout='raw' />
			</Box>

			<Dialog
				open={isDialogOpen}
				onClose={toggleDialog}
				classes={{ paper: 'dialog-paper' }}
				TransitionComponent={Transition}
				hideBackdrop
			>
				<Button variant='contained' className='dialog-close-button' onClick={toggleDialog}>
					<CloseIcon />
				</Button>
				<DialogTitle variant='h4'>{title}</DialogTitle>
				<DialogContent>
					<Typography variant='body1' className='dialog-text'>
						{text}
					</Typography>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default MapElement
