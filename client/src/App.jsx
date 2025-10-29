import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'
import DragDropList from './components/DragDropList'
import Header from './components/Header'
import ScrollSpyNav from './components/ScrollSpyNav'

import { Row, Col, Container } from 'react-bootstrap'
import { set } from 'mongoose'

const App = () => {

  const [content, setContent] = useState(null)

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('params')
    setContent(param);
  }, [])

  return (
    <>
    <Header />
    <Container>
      {content === null &&  
      <h3>Please Choose an option from the Navbar.</h3>
      }
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
        {content === 'searchBar' && (
          <section>
            <h5 className='text-xl font-semibold mb-2'>1. Search Bar</h5>
            <SearchBar />
          </section>
        )
        }
        {content === 'modal' && (
          <section>
            <h5 className='text-xl font-semibold mb-2'>2. Modal</h5>
            <Modal />
            </section>
            )
          }
          {content === 'dragDrop' && (
            <section>
              <h5 className='text-xl font-semibold mb-2'>3. Drag & Drop List</h5>
              <DragDropList />
            </section>
          )
          }
          {content === 'scrollSpyNav' && (
            <section>
              <ScrollSpyNav />
              </section>
              
            )}
          
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
