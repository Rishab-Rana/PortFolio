import 'bootstrap/dist/css/bootstrap.css';
import dbImg  from './dp.png'
import './Firstcontainer.css';

function FirstComponent(){
    return(
        <div>
            <div class="container">
  <div class="row">
    <div class="col">
    <img src={dbImg} class="img-fluid dp-img" />
    </div>
    <div class="col">
      <h1>RISHAB RANA</h1>
      <h2>Student B.Sc. IT</h2>
      <h2>Graphic Era Hill University</h2>
    </div>
    
  </div>
</div>
        </div>
    );
}

export default FirstComponent;