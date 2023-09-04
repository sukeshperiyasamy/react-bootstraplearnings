import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {
  return (<>
   <h1>hello world</h1>
   <p className='display-5 text-end #top'>hello world!!</p>
   <p className='display-5 text-center'>hello world!!</p>

   <p className='h1'>hello world!!</p>
   <p className='h2'>hello world!!</p>
   <p className='h3'>hello world!!</p>
   <p className='h4'>hello world!!</p>
   <p className='h5'>hello world!!</p>
   <p className='display-1'>hello world!!</p>
   <p className='display-2'>hello world!!</p>
   <p className='display-3'>hello world!!</p>
   <p className='display-4'>hello world!!</p>
   <p className='display-5'>hello world!!</p>
   <p >Aute enim minim sint do adipisicing ipsum. </p>
   <p className="lead text-muted">Aute enim minim sint do adipisicing ipsum. </p>
<p className="text-lowercase">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="text-uppercase">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="text-capitalize">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>

<p className="fw-bold">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="fw-semibold">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="fw-light">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="fst-italic">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>


<p className="text-decoration-underline">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="text-decoration-none">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<p className="del">Dolor quis sit deserunt nisi occaecat amet labore mollit.</p>
<a href="#top"className="text-decoration-none" >back to top</a>


<p className='text-black-50'>hello world!!</p>
<p className='text-bg-warning p-2'>hello world!!</p>
<p className='text-bg-warning p-4'>hello world!!</p>
<p className='text-bg-warning p-5'>hello world!!</p>
<p className='text-bg-warning pt-5'>hello world!!</p>
<p className='text-bg-warning pb-5'>hello world!!</p>
<p className='text-bg-warning px-5'>hello world!!</p>
<p className='text-bg-warning py-5'>hello world!!</p>
<p className='text-bg-warning ps-5'>hello world!!</p>
<p className='text-bg-warning pe-5'>hello world!!</p>

<p className='text-bg-info p-3 m-3'>hello world!!</p>
<p className='text-bg-danger  p-5'>hello world!!</p>
<br></br>
<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <br></br>
    <Spinner animation="border" />

    <Spinner animation="grow" />
    <br></br>

    <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />

      <br></br>
      <Stack direction="horizontal" gap={3}>
      <Badge pill bg="primary" >
        Primary
      </Badge>
      <Badge pill bg="secondary">
        Secondary
      </Badge>
      <Badge pill bg="success">
        Success
      </Badge>
      <Badge pill bg="danger">
        Danger
      </Badge>
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>
      <Badge pill bg="info">
        Info
      </Badge>
      <Badge pill bg="light" text="dark">
        Light
      </Badge>
      <Badge pill bg="dark">
        Dark
      </Badge>
      </Stack>
      <br></br>
      <Stack gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
    <br></br>
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <br></br>
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
    <br></br>
   </>
  );
}

export default App;
