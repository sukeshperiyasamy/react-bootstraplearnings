import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import container from 'react-bootstrap';
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
<p className='m-2 p-2 bg-primary d-inline'>hello world</p>
<p className='m-2 p-2 bg-primary d-block'>hello world</p>


<div className='d-flex flex-column align-items-end '>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>

</div>
<div className='d-flex justify-content-align-content-center '>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>

</div>
<div class="d-flex justify-content-center">
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p></div>
<div class="d-flex justify-content-between">
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p></div>
<div class="d-flex justify-content-around">
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p>
<p className='m-2 p-2 bg-primary'>hello world</p></div>
<p className='float-right'>hello world</p>
<div className="float-left"><p>Float right on all viewport sizes</p></div><br></br>
<div className="float-right"><p>Float right on all viewport sizes</p></div>
<div className="float-none">Don't float on all viewport sizes</div>
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="border border-primary d-inline p-2 m-2 rounded-5 " >.text-white</p>
<p class="border border-danger d-inline p-2 m-2 rounded-3">.text-white</p>
<p class="border border-info d-inline p-2 m-2 rounded-2">.text-white</p><p class="border border-warning d-inline p-2 m-2 rounded">.text-white</p>
<p class="border border-primary d-inline p-2  rounded-circle">.text-white</p>
<div class="embed-responsive embed-responsive-4by3">
<br></br>
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/d-x7EITtNaU?si=cu6nF4-sBTJ0OPYe" allowfullscreen></iframe>
</div>
<br></br>




<br></br>
<container>

</container>
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
