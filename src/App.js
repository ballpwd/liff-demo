import './App.css';
import React,{useState} from 'react' ;
import { Button, Container, Row, Col } from 'reactstrap';

const liff = window.liff;

const App = () => {
  const [name, setName] = useState('')
  const [userLineID, setUserLineID] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const  main = async () => {
    await liff.init({liffId: '1655622288-A2VrZ1jw'})
  }

  main();
  
  const getProfile = async () => {
    const profile = await liff.getProfile()
    setName(profile.displayName)
    setUserLineID(profile.userId)
    setPictureUrl(profile.pictureUrl)
    setStatusMessage(profile.statusMessage)
  }

  const shareMessage = async () =>  {
    const result = liff.shareTargetPicker([
      {
        type: 'text',
        text: 'This is message shared by LIFF'
      }
    ])
    if(result){
      alert('Message Shared !!')
    }else{
      alert('ShareTargetPicker was cancelled by user')
    }
    liff.closeWindow()
  }

  
  
  const closeLIFF =()=> {
    liff.closeWindow();
  }

  return (
    <Container className='text-center' fluid={true} style={{height: '100vh' ,backgroundColor: '#282c34'}}>
      <Row className='align-items-center h-100'>
        <Col className='text-center' >
          <div>
            {(pictureUrl && pictureUrl != '') ? <img width="25%" src={pictureUrl} />: null }
          </div>
          <div>
            {(name && name != '') ? <p>Name: {name}</p> : null }
          </div>
          <div>
            {(userLineID && userLineID != '') ? <p>LineID: {userLineID}</p> : null }
          </div>
          <div>
            {(statusMessage && statusMessage != '') ? <p>statusMessage: {statusMessage}</p> : null } 
          </div>
          <Button color="primary" className='m-2' onClick={getProfile} >
            Getdata INFO
          </Button>
          <Button color="secondary" className='m-2' onClick={shareMessage} >
            Send Message
          </Button>
          <Button color="danger" className='m-2' onClick={closeLIFF} >
            Close LIFF
          </Button>
        </Col>
        
      </Row>
      
        
        
  </Container>
    
  );
}

export default App;
