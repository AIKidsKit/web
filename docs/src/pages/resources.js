import React, { useState } from "react";
import Layout from '@theme/Layout';
import Data from '../data/resources'; 
import Card from '../components/Card/Card';
import { Button, Cards } from "react-bootstrap";

function Resources() {

    const [item, setItem] = useState(Data);
  return (
    <Layout title="Resources">
      <div
        style={{
        //   display: 'flex',
          justifyContent: 'center',
        //   alignItems: 'center',
        //   height: '50vh',
        //   fontSize: '14px',
        }}>
    <>
      <div className="container-fluid">
        <div className="row">
          <Card item={item} />
        </div>
      </div>
    </>
      </div>
    </Layout>
  );
}

export default Resources;
