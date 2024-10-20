import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Presentazione from './Presentazione';
import Recensioni from './Recensioni';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap

function App() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="App">
      <Nav tabs>
        {/* Tab per Presentazione */}
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ cursor: 'pointer' }}
          >
            Presentazione
          </NavLink>
        </NavItem>

        {/* Tab per Recensioni */}
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{ cursor: 'pointer' }}
          >
            Dicono di me
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        {/* Contenuto della Tab Presentazione */}
        <TabPane tabId="1">
          <div style={{ marginTop: '20px' }}>
            <Presentazione />
          </div>
        </TabPane>

        {/* Contenuto della Tab Recensioni */}
        <TabPane tabId="2">
          <div style={{ marginTop: '20px' }}>
            <Recensioni />
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;
