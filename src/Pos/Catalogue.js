import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

import { getCatalogue, deleteCatalogue } from "../stores/catalogue";

function Catalogue(props) {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const _data = useSelector((state) => state?.catalogue?.Data) || [];

  const _trash = useSelector((state) => state?.catalogue?.Trash) || [];

  const _loading = useSelector((state) => state?.catalogue?.Loading) || false;

  const _input = useSelector((state) => state?.core?.Input) || {};

  useEffect(() => {
    console.log("LOAD PERTAMA");
  }, [props.type]);

  useEffect(() => {
    // if (_data.length === 0) {
    getCatalogue(props.type);
    // }
  }, []);

  function openAdd() {
    navigate("/addCatalogue/" + props.type);
  }

  function doDelete(_id) {
    deleteCatalogue(_id);
  }

  return (
    <div>
      <Row>
        <Col xs={9}>
          <p>
            {_loading
              ? "Loading..."
              : "Catalogue " +
                props?.type +
                " " +
                _data.length +
                " items (" +
                _trash.length +
                " items)"}
          </p>
        </Col>
        <Col xs={3}>
          <Button onClick={openAdd} variant="primary">
            Create
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        {_data.map((value, key) => {
          return (
            <Col xs={4} style={{ marginBottom: 20 }}>
              <ListGroup>
                <ListGroup.Item>ID : {value?.id}</ListGroup.Item>
                <ListGroup.Item>SKU : {value?.sku}</ListGroup.Item>
                <ListGroup.Item>Nama : {value?.nama}</ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    style={{ fontWeight: "bold" }}
                    to={"/editCatalogue/" + value?.id}
                  >
                    Edit
                  </Link>
                  <a
                    style={{ marginLeft: 20, fontWeight: "bold" }}
                    onClick={() => doDelete(value?.id)}
                  >
                    Delete
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Catalogue;
