import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import XCircle from "../icons/XCircle";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Router = ({ x, y, name }) => {
  const compRef = useRef(null);

  useEffect(() => {
    compRef.current.style.top = `${y - compRef.current.clientHeight / 2}px`;
    compRef.current.style.left = `${x - compRef.current.clientWidth / 2}px`;
  }, [x, y]);

  return (
    <div className='position-absolute' ref={compRef}>
      <Button variant='outline-primary'>
        <Row className='justify-content-center'>
          {name}
          <XCircle />
        </Row>
      </Button>
    </div>
  );
};

Router.propTypes = {};

export default Router;
