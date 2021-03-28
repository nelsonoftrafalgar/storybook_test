import { Col, Row } from 'react-bootstrap'

import MiddleSection from './containers/MiddleSection'

const App = () => {
	return (
		<div className='app'>
			<Row>
				<Col xs='4'></Col>
				<Col xs='4'>
					<MiddleSection />
				</Col>
				<Col xs='4'></Col>
			</Row>
		</div>
	)
}

export default App
