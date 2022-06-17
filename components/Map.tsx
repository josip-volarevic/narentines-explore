import React, { useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import { useEventListener, useIsomorphicLayoutEffect, useToggle } from 'hooks'
import { getMapElementStyles } from 'utils/map'
import { Box, Button } from '@mui/material'
import { mapElements } from 'data'
import MapImage from 'public/assets/map.png'
import FlagAnimation from 'public/assets/flag.gif'
import LeftArrowIcon from 'public/assets/vector-icons/left-arrow.svg'
import VolumeOnIcon from 'public/assets/vector-icons/volume-on.svg'
import VolumeOffIcon from 'public/assets/vector-icons/volume-off.svg'
import MapElement from './MapElement'
import useSound from 'use-sound'
import Image from 'next/image'

enum Orientation {
	Portrait = 'portrait',
	Landscape = 'landscape',
}

const backgroundAudio = '/assets/sounds/background.mp3'

const Map: React.FC = () => {
	const [elementScaling, setElementScaling] = useState(1)
	const [imageRatio, setImageRatio] = useState<number | null>(null)
	const [orientation, setOrientation] = useState<Orientation | null>(null)
	const [isMapLoaded, setIsMapLoaded] = useState(false)
	const [play, { stop }] = useSound(backgroundAudio, { volume: 0.03, interrupt: false })
	const [isBgMusicPlaying, toggleBgMusic] = useToggle(true)

	const transformRef = useRef<ReactZoomPanPinchRef | null>(null)

	const handleResize = useCallback(() => {
		const transformWrapperRef = transformRef?.current?.instance.wrapperComponent

		if (transformWrapperRef && imageRatio) {
			const { offsetWidth, offsetHeight } = transformWrapperRef
			setOrientation(offsetWidth * imageRatio > offsetHeight ? Orientation.Landscape : Orientation.Portrait)

			transformRef.current?.centerView()
		} else setOrientation(null)

		const mapImageElement = transformWrapperRef?.getElementsByClassName('map-image')[0] as HTMLImageElement

		if (mapImageElement) {
			setElementScaling(mapImageElement.clientHeight / mapImageElement.naturalHeight)
		}
	}, [imageRatio])

	useEventListener('resize', handleResize)
	useIsomorphicLayoutEffect(handleResize, [handleResize])

	useEffect(play, [play])

	return (
		<>
			<TransformWrapper
				alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
				panning={{ excluded: ['button'] }}
				wheel={{ excluded: ['button'] }}
				pinch={{ excluded: ['button'] }}
				doubleClick={{ disabled: true }}
				ref={transformRef}
				centerZoomedOut
				limitToBounds
				centerOnInit
				maxScale={3}
			>
				<TransformComponent contentClass={orientation ? `react-transform-component--${orientation}` : ''}>
					<Image
						src={MapImage}
						alt=''
						layout='raw'
						// priority
						// quality={100}
						placeholder='blur'
						className={orientation ? `map-image map-image--${orientation}` : ''}
						onLoadingComplete={() => setIsMapLoaded(true)}
						onLoad={(event: React.ChangeEvent<HTMLImageElement>) => {
							flushSync(() => {
								setImageRatio(1)
							})

							const imageElement = event.target
							if (imageElement) {
								setImageRatio(imageElement.offsetHeight / imageElement.offsetWidth)
								setElementScaling(imageElement.clientHeight / imageElement.naturalHeight)
							}
						}}
					/>

					{isMapLoaded &&
						mapElements.map(({ top, left, zIndex, ...element }) => (
							<MapElement key={zIndex} {...element} style={getMapElementStyles(top, left, zIndex, elementScaling)} />
						))}
				</TransformComponent>
			</TransformWrapper>
			{isMapLoaded ? (
				<Box className='action-buttons'>
					<Button variant='contained' href='https://narentines.com' rel='noreferrer'>
						<LeftArrowIcon className='icon' />
						&nbsp;homepage
					</Button>
					{isBgMusicPlaying ? (
						<Button
							variant='contained'
							onClick={() => {
								stop()
								toggleBgMusic()
							}}
						>
							<VolumeOnIcon className='icon' />
						</Button>
					) : (
						<Button
							variant='contained'
							onClick={() => {
								play()
								toggleBgMusic()
							}}
						>
							<VolumeOffIcon className='icon' />
						</Button>
					)}
				</Box>
			) : (
				<Image id='loading-image' src={FlagAnimation} priority layout='raw' unoptimized alt='' />
			)}
		</>
	)
}

export default Map
