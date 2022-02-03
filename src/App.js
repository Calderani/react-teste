// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <Container className="App">
      <div>
        <h3 className='py-4'>Simulador de Investimentos</h3>
      </div>
      <Row>
        <h5 className='py-2 subtitle'>Simulador</h5>
        <Col sm={3}>
          <div className='description_label d-flex py-2'>
            <span>Rendimento</span>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <ToggleButtonGroup className="w-100" type="radio" name="options" defaultValue={1}>
            <ToggleButton variant='outline-dark' id="tbg-radio-2" value={1}>
              Bruto
            </ToggleButton>
            <ToggleButton variant='outline-dark' id="tbg-radio-3" value={2}>
              Líquido
            </ToggleButton>
          </ToggleButtonGroup>
          <Form.Group className="mb-3">
            <Form.Label>Aporte Inicial</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prazo (em meses)</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>IPCA (ao ano)</Form.Label>
            <Form.Control />
          </Form.Group>
          <Button className="w-100" variant="outline-dark"><b>Limpar Campos</b></Button>
        </Col>
        <Col sm={3}>
        <div className='description_label d-flex py-2'>
            <span>Tipos de indexação</span>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <ToggleButtonGroup className="w-100" type="radio" name="options" defaultValue={1}>
            <ToggleButton variant='outline-dark' id="tbg-radio-2" value={1}>
              PRÉ
            </ToggleButton>
            <ToggleButton variant='outline-dark' id="tbg-radio-3" value={2}>
              PÓS
            </ToggleButton>
            <ToggleButton variant='outline-dark' id="tbg-radio-4" value={3}>
              FIXADO
            </ToggleButton>
          </ToggleButtonGroup>
          <Form.Group className="mb-3">
            <Form.Label>Aporte Mensal</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rentabilidade</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CDI (ao ano)</Form.Label>
            <Form.Control />
          </Form.Group>
          <Button className="w-100" variant="secondary"><span className='button_label'><b>Simular</b></span></Button>
        </Col>
        <Col sm={6}>Gráficos</Col>
      </Row>
    </Container>
  );
}

export default App;
