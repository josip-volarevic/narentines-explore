import type { NextPage } from 'next'
import Map from 'components/Map'
import Script from 'next/script'

const Home: NextPage = () => {
	return (
		<>
			<Script
				src='https://unpkg.com/leaflet@1.8.0/dist/leaflet.js'
				integrity='sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=='
				crossOrigin=''
			></Script>

			<Map />
		</>
	)
}

export default Home
