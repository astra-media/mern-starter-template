import { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'
import DragDropList from './components/DragDropList'

import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>React Components</h1>
          <section>
            <h5 className='text-xl font-semibold mb-2'>1. Search Bar</h5>
            <SearchBar />
          </section>
          <section>
            <h5 className='text-xl font-semibold mb-2'>2. Modal</h5>
            <Modal />
          </section>
          <section>
            <h5 className='text-xl font-semibold mb-2'>3. Drag & Drop List</h5>
            <DragDropList />
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default App
