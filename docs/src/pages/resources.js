import React, { useState } from "react";
import Layout from '@theme/Layout';
import Data, { Tags } from '../data/resources'; 
import Card from '../components/Card/Card';
import Buttons from "../components/Buttons/Buttons";

function Resources() {
  
    const [item, setItem] = useState(Data);

    const tagItems = [...new Set(Data.map((Val) => Val.tags))];

    const filterItem = (curtag) => {
      const newItem = Data.filter((newVal) => {
        return newVal.tags === curtag;
      });
      setItem(newItem);
    };

  return (
    <Layout title="Resources">
      <div
        style={{
          // display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          // height: '50vh',
          fontSize: '14px',
        }}>
    <>
      <div className="container-fluid testing body-resources">

      <Buttons
            filterItem={filterItem}
            setItem={setItem}
            tagItems={tagItems}
          />

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
