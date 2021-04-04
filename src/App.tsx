import { Col, Row } from 'react-bootstrap'

import LeftSection from './containers/LeftSection'
import MiddleSection from './containers/MiddleSection'
import RightSection from './containers/RightSection'

const App = () => {
	return (
		<div className='app container'>
			<Row>
				<Col lg='4'>
					<LeftSection />
				</Col>
				<Col lg='4'>
					<MiddleSection />
				</Col>
				<Col lg='4'>
					<RightSection />
				</Col>
			</Row>
		</div>
	)
}

export default App
