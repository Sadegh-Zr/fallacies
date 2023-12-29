import * as React from "react";

import './index.css';
import { Header, FallaciesList, FallacyDetails, ModalCopy } from "../components";

const IndexPage = () => {
  const [searchValue, updateSearchValue] = React.useState('');
  const [selectedFallacy, setSelectedFallacy] = React.useState(null);
  const [isModalCopyVisible, setModalCopyVisibility] = React.useState(false);

  return (
    <main>
      <Header searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <FallaciesList searchValue={searchValue} setSelectedFallacy={setSelectedFallacy} />
      <div className="scrollFaderBottom"/>
      <FallacyDetails selectedFallacy={selectedFallacy} setSelectedFallacy={setSelectedFallacy} onButtonCopyClick={() => { setModalCopyVisibility(true); }} />
      <ModalCopy isOpen={isModalCopyVisible} selectedFallacy={selectedFallacy} hideModal={() => { setModalCopyVisibility(false); }} />
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>مغالطات</title>
