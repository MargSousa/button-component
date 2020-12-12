import { Button } from 'react-bootstrap';
import './ButtonList.css';

function ButtonList() {

  const label = "Label";

  return (
    <div className="Button">
      <div className="group">
        <div className="type">
          <h5>Default</h5>
          <Button variant="primary">{label}</Button>
        </div>
        <div className="type">
          <h5>Hover and focus</h5>
          <Button variant="primary"  className="primary-focus">{label}</Button>
        </div>
        <div className="type">
          <h5>Disabled</h5>
          <Button variant="primary" disabled="true">{label}</Button>
        </div>
      </div>
      <div className="group">
        <div className="type">
          <h5>Shadow</h5>
          <Button variant="primary" className="primary-shadow">{label}</Button>
        </div>
        <div className="type">
          <h5>Hover and focus</h5>
          <Button variant="primary" className="primary-shadow-focus">{label}</Button>
        </div>
        <div className="type">
          <h5>Disabled</h5>
          <Button variant="primary" className="primary-shadow" disabled="true">{label}</Button>
        </div>
      </div>
      <div className="group">
        <div className="type">
          <h5>Outline</h5>
          <Button variant="outline-primary">{label}</Button>
        </div>
        <div className="type">
          <h5>Hover and focus</h5>
          <Button variant="outline-primary" className="primary-outline-focus">{label}</Button>
        </div>
        <div className="type">
          <h5>Disabled</h5>
          <Button variant="outline-primary" id="primary-outline-disabled" disabled="true">{label}</Button>
        </div>
      </div>
      <div className="group display-column">
        <div className="group">
          <div className="type">
            <h5>Text</h5>
            <Button variant="text">{label}</Button>
          </div>
          <div className="type">
            <h5>Hover and focus</h5>
            <Button variant="text" className="text-focus">{label}</Button>
          </div>
          <div className="type">
            <h5>Disabled</h5>
            <Button variant="text" disabled="true">{label}</Button>
          </div>
        </div>
        <div className="type">
          <h5>Sizes</h5>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>
      <div className="group">
        <div className="type">
          <h5>Colors</h5>
          <Button variant="secondary">Secondary</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div className="type">
          <h5>Hover and focus</h5>
          <Button variant="secondary" className="secondary-focus">Secondary</Button>
          <Button variant="warning" className="warning-focus">Warning</Button>
          <Button variant="danger" className="danger-focus">Danger</Button>
        </div>
        <div className="type">
          <h5>Disabled</h5>
          <Button variant="secondary" disabled="true">Secondary</Button>
          <Button variant="warning" disabled="true">Warning</Button>
          <Button variant="danger" disabled="true">Danger</Button>
        </div>
      </div>
      <div className="group">
        <div className="type">
          <h5>Icons</h5>
          <Button variant="primary"><i class="material-icons">face</i></Button>
          <Button variant="secondary"><i class="material-icons">face</i></Button>
          <Button variant="warning"><i class="material-icons">face</i></Button>
          <Button variant="primary"><i class="material-icons">face</i> {label}</Button>
          <Button variant="primary">{label} <i class="material-icons">face</i></Button>
        </div>
        <div className="type">
          <h5>Hover and focus</h5>
          <Button variant="primary" className="primary-focus"><i class="material-icons">face</i></Button>
          <Button variant="secondary" className="secondary-focus"><i class="material-icons">face</i></Button>
          <Button variant="warning" className="warning-focus"><i class="material-icons">face</i></Button>
          <Button variant="primary" className="primary-focus"><i class="material-icons">face</i> {label}</Button>
          <Button variant="primary" className="primary-focus">{label} <i class="material-icons">face</i></Button>
        </div>
        <div className="type">
          <h5>Disabled</h5>
          <Button variant="primary" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="secondary" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="warning" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="primary" disabled="true"><i class="material-icons">face</i> {label}</Button>
          <Button variant="primary" disabled="true">{label} <i class="material-icons">face</i></Button>
        </div>
      </div>
      <div className="group">
        <div className="type">
        <Button variant="outline-primary"><i class="material-icons">face</i></Button>
          <Button variant="outline-secondary"><i class="material-icons">face</i></Button>
          <Button variant="outline-warning"><i class="material-icons">face</i></Button>
          <Button variant="outline-primary"><i class="material-icons">face</i> {label}</Button>
          <Button variant="outline-primary">{label} <i class="material-icons">face</i></Button>
        </div>
        <div className="type">
          <Button variant="outline-primary" className="primary-outline-focus"><i class="material-icons">face</i></Button>
          <Button variant="outline-secondary" className="secondary-outline-focus"><i class="material-icons">face</i></Button>
          <Button variant="outline-warning" className="warning-outline-focus"><i class="material-icons">face</i></Button>
          <Button variant="outline-primary" className="primary-outline-focus"><i class="material-icons">face</i> {label}</Button>
          <Button variant="outline-primary" className="primary-outline-focus">{label} <i class="material-icons">face</i></Button>
        </div>
        <div className="type">
          <Button variant="outline-primary" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="outline-secondary" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="outline-warning" disabled="true"><i class="material-icons">face</i></Button>
          <Button variant="outline-primary" disabled="true"><i class="material-icons">face</i> {label}</Button>
          <Button variant="outline-primary" disabled="true">{label}<i class="material-icons">face</i></Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonList;
