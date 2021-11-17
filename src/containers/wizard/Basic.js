/* eslint-disable */
import React, { useState } from 'react';
import { Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import IntlMessages from 'helpers/IntlMessages';
import BottomNavigation from 'components/wizard/BottomNavigation';
import TopNavigation from 'components/wizard/TopNavigation';
import { Select } from '@material-ui/core';
import { FormikReactSelect } from 'containers/form-validations/FormikFields';
import { Link } from 'react-router-dom';

const Basic = ({ intl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [chkdisease, setchkDisease] = useState('no');
  const [disease, setDisease] = useState('');
  const [injury, setInjury] = useState('');
  const [chkinjury, setchkInjury] = useState('');
  const [gender, setGender] = useState('');


  console.log(name, "name")
  console.log(email, "email")
  console.log(password, "password")


  const topNavClick = (stepItem, push) => {
    push(stepItem.id);
  };

  const onClickNext = (goToNext, steps, step) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const { messages } = intl;

  const [bmi, setBmi] = useState(0);

  const calculate = () => {
    
    const bmi = +weight / (+height) ** 2;
    setBmi(bmi);
    let bmiResults="";
    if (bmi <= 18.5) {
      bmiResults = "Underweight";
    } else if (bmi <= 24.9) {
      bmiResults = "Normal weight";
    } else if (bmi <= 29.9) {
      bmiResults = "Overweight";
    } else if (bmi >= 30) {
      bmiResults = "Obesity";
    } else {
      bmiResults = "BMI";
    }

  };

  


  console.log("bmi -- >",bmi)



  return (
    <Card>
      <CardBody className="wizard wizard-default">
        <Wizard>
          <TopNavigation
            className="justify-content-center"
            disableNav={false}
            topNavClick={topNavClick}
          />
          <Steps>
            <Step
              id="step1"
              name={messages['wizard.step-name-1']}
              desc={messages['wizard.step-desc-1']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    <Label>
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Label>
                      Email
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Ahmed@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label>
                      password
                    </Label>
                    <Input
                      type="text"
                      name="password"
                      placeholder="***"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step
              id="step2"
              name={messages['wizard.step-name-2']}
              desc={messages['wizard.step-desc-2']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    <Label>
                      Age
                    </Label>
                    <Input
                      type="number"
                      name="age"
                      placeholder="20"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <Label>
                      height
                    </Label>
                    <Input
                      type="number"
                      name="height"
                      placeholder='Enter a in meter'
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                    <Label>
                      weight
                    </Label>
                    <Input
                      type="number"
                      name="weight"
                      placeholder="Enter a in kgs"
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.target.value)
                      }}
                    />
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step
              id="step3"
              name={messages['wizard.step-name-3']}
              desc={messages['wizard.step-desc-3']}
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    <Label>
                      Gender
                    </Label>
                    <select
                      name="gender"
                      className="form-control"
                      onChange={(e) => {
                        setGender(e.target.value)
                        calculate()
                      }}
                    >
                      <option value="">Select an option..</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>

                    <Label>
                      Disease
                    </Label>

                    <select
                      name="disease"
                      className="form-control"
                      onChange={(e) => setchkDisease(e.target.value)}
                    >
                      <option value="">Do you have any disease</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                    {
                      chkdisease === "yes" ?
                      <>
                      <Label>
                      Please Specify your disease
                    </Label>
                      <Input
                      type="text"
                      name="disease"
                      placeholder="ulcer, cardiac, asthama"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                    />
                      </>
                    : 
                    null
                    
                    }
                    {/* <Input
                      type="text"
                      name="disease"
                      placeholder="ulcer, cardiac, asthama"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                    /> */}
                 <Label>
                      Injury
                    </Label>

                    <select
                      name="injury"
                      className="form-control"
                      onChange={(e) => setchkInjury(e.target.value)}
                    >
                      <option value="">Do you have any Injury</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                    {
                      chkinjury === "yes" ?
                      <>
                      <Label>
                      Please Specify your Injury
                    </Label>
                      <Input
                      type="text"
                      name="Injury"
                      placeholder="Knee pain, back pain , shoulder disability"
                      value={injury}
                      onChange={(e) => setInjury(e.target.value)}
                    />
                      </>
                    : 
                    null
                    
                    }
                  </FormGroup>
                </Form>
              </div>
            </Step>
            <Step id="step4" hideTopNav>
              <div className="wizard-basic-step text-center">
                {/* <h2 className="mb-2">
                  <IntlMessages id="wizard.content-thanks" />
                </h2> */}

                <h2>
                  BMI result :::
                </h2>

                <Weight bmi ={bmi} /> 

                <p>
                  <IntlMessages id="wizard.registered" />
                </p>
              </div>
            </Step>
          </Steps>
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className="justify-content-center"
            prevLabel={messages['wizard.prev']}
            nextLabel={messages['wizard.next']}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};




function Weight(props) {

  if (props.bmi <= 18.5) {
    return (
      <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "70%"
      }}
    >
      <h2
        style={{
          fontWeight: "normal",
          color:'#121212',

          fontSize: "22px",
        }}
      >
        According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Too Low, we sugess
        you to Gain some weight
      </h2>
      <h4
        style={{
          fontWeight: "normal",
          color:'#121212',
          fontSize: "22px",
        }}
      >
        Don't know how to Gain? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
      </h4>
      <Link to='/userDash' className="btn btn-outline-success">
        Let's See
      </Link>
    </div>
    );
  } else if (props.bmi <= 24.9) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        maxWidth: "70%"

        }}
      >
        <h2
          style={{
            fontWeight: "normal",
            fontSize: "22px",
          color:'#121212',

          }}
        >
          According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Normal, we sugess
          you to Maintain weight
        </h2>
        <h4
          style={{
            fontWeight: "normal",
          color:'#121212',

            fontSize: "22px",
          }}
        >
        Don't know how to Maintain? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
        </h4>
        <Link to='/userDash' className="btn btn-outline-light">
          Let's See
        </Link>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        maxWidth: "70%",
        // backgroundColor:'red'

        }}
      >
        <h2
          style={{
            fontWeight: "normal",
          color:'#121212',

            fontSize: "22px",
          }}
        >
          According to your <span style={{color:'#63d471'}}> BMI ({props.bmi})</span> Your Weight is Too much, we sugess
          you to Lean some weight
        </h2>
        <h4
          style={{
            fontWeight: "normal",
          color:'#121212',

            fontSize: "22px",
          }}
        >
        Don't know how to Lean? <span style={{color:'#63d471'}}> Follow our Exercise and Diet plan Accordingly</span>
        </h4>
        <Link to='/userDash' className="btn btn-outline-success">
          Let's See
        </Link>
      </div>
    );
  }
}

export default injectIntl(Basic);
