import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import MapImage from 'public/assets/map.png'
import Image from 'next/image'

const Map: React.FC = () => {
	// const transformRef = useRef<ReactZoomPanPinchRef | null>(null)

	return (
		<TransformWrapper
			alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
			panning={{ excluded: ['button'] }}
			wheel={{ excluded: ['button'] }}
			pinch={{ excluded: ['button'] }}
			doubleClick={{ disabled: true }}
			// ref={transformRef}
			centerZoomedOut
			limitToBounds
			centerOnInit
			maxScale={3}
		>
			{({ state: { scale } }) => (
				<TransformComponent wrapperClass='map-scroll-container'>
					<Image src={MapImage} alt='' className='map-image' layout='raw' quality={100} />
				</TransformComponent>
			)}
		</TransformWrapper>
	)
}

export default Map
