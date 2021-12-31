import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Step from './Components/Step.jsx';
import Form from './Components/Form.jsx';


function App() {

  const [steps, setSteps] = useState([
    {direction: "",
    text: ""}
  ]);

  const onSubmittedData = (formData) => {
    setSteps([...steps, formData]);
}

  return (
    <div className="App bg-secondary">
      <Form onSubmitted={onSubmittedData}/>
      {
        steps.map((item, i)=>{
          if(steps.length < 1){
            return <p></p>
          }
          return <Step  key={i} direction={item.direction} text={item.text} />
        })
      }
    </div>
  );
}

export default App;
