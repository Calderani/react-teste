// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { useState } from 'react'

function App() {
  const [EnteredInitialInvestiment, setEnteredInitialInvestiment] = useState('');
  const [EnteredMonths, setEnteredMonths] = useState('');
  const [EnteredIpca, setEnteredIpca] = useState('');
  const [EnteredMonthlyInvestiment, setEnteredMonthlyInvestiment] = useState('');
  const [EnteredProfitability, setEnteredProfitability] = useState('');
  const [EnteredCdi, setEnteredCdi] = useState('');
  const [validated, setValidated] = useState(false);

  const initialInvestimentChangeHandler = event => {
    setEnteredInitialInvestiment(event.target.value);
  }

  const monthsChangeHandler = event => {
    setEnteredMonths(event.target.value);
  }

  const ipcaChangeHandler = event => {
    setEnteredIpca(event.target.value);
  }

  const monthlyInvestimentChangeHandler = event => {
    setEnteredMonthlyInvestiment(event.target.value);
  }

  const profitabilityChangeHandler = event => {
    setEnteredProfitability(event.target.value);
  }

  const cdiChangeHandler = event => {
    setEnteredCdi(event.target.value);
  }

  const formSubmissionHandler = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log(EnteredInitialInvestiment, EnteredMonths, EnteredIpca, EnteredMonthlyInvestiment, EnteredProfitability, EnteredCdi);
    }
    setValidated(true);
    console.log(EnteredInitialInvestiment, EnteredMonths, EnteredIpca, EnteredMonthlyInvestiment, EnteredProfitability, EnteredCdi);
  }

  return (
    <Container className="App">
      <div>
        <h3 className='py-4'>Simulador de Investimentos</h3>
      </div>
      <Form noValidate validated={validated} onSubmit={formSubmissionHandler}>
        <Row>

          <h5 className='py-2 subtitle'>Simulador</h5>
          <Col sm={3}>
            <div className='description_label d-flex py-2'>
              <span>Rendimento</span>
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <ToggleButtonGroup className="w-100 pb-4" type="radio" name="income" defaultValue={1}>
              <ToggleButton variant='outline-dark' id="income-radio-1" value={1}>
                <FontAwesomeIcon icon={faCheck} /> Bruto
              </ToggleButton>
              <ToggleButton variant='outline-dark' id="income-radio-2" value={2}>
                Líquido
              </ToggleButton>
            </ToggleButtonGroup>
            <Form.Group className="mb-3">
              <Form.Label>Aporte Inicial</Form.Label>
              <Form.Control required name="initial_investiment" onChange={initialInvestimentChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prazo (em meses)</Form.Label>
              <Form.Control required name="months" onChange={monthsChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IPCA (ao ano)</Form.Label>
              <Form.Control required name="ipca" onChange={ipcaChangeHandler} />
            </Form.Group>
            <Button className="w-100" variant="outline-dark"><b>Limpar Campos</b></Button>
          </Col>
          <Col sm={3}>
            <div className='description_label d-flex py-2'>
              <span>Tipos de indexação</span>
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <ToggleButtonGroup className="w-100 pb-4" type="radio" name="indexing-types" defaultValue={1}>
              <ToggleButton variant='outline-dark' id="indexing-types-radio-1" value={1}>
                PRÉ
              </ToggleButton>
              <ToggleButton variant='outline-dark' id="indexing-types-radio-2" value={2}>
                PÓS
              </ToggleButton>
              <ToggleButton variant='outline-dark' id="indexing-types-radio-3" value={3}>
                FIXADO
              </ToggleButton>
            </ToggleButtonGroup>
            <Form.Group className="mb-3">
              <Form.Label >Aporte Mensal</Form.Label>
              <Form.Control required name="monthly_investiment" onChange={monthlyInvestimentChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rentabilidade</Form.Label>
              <Form.Control required name="profitability" onChange={profitabilityChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CDI (ao ano)</Form.Label>
              <Form.Control required name="cdi" onChange={cdiChangeHandler} />
            </Form.Group>
            <Button className="w-100" variant="secondary" type='submit'><span className='button_label'><b>Simular</b></span></Button>
          </Col>

          <Col sm={6}>Gráficos</Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
