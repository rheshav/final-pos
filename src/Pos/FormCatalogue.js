import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { useParams, useNavigate, useNavigationType } from "react-router-dom";

import {
  createCatalogue,
  readCatalogue,
  updateCatalogue,
} from "../stores/catalogue";

function FormCatalogue(props) {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  // let navigateType = useNavigationType();

  const [input, setInput] = useState({});

  const params = useParams();

  const _data = useSelector((state) => state?.catalogue?.Data) || [];

  const _read = useSelector((state) => state?.catalogue?.Readed) || {};

  const _message = useSelector((state) => state?.core?.Message) || "";

  const _action = useSelector((state) => state?.catalogue?.Action) || "";

  const _loading = useSelector((state) => state?.catalogue?.Loading) || false;

  const _input = useSelector((state) => state?.core?.Input) || {};

  const { type, id } = params;

  function doInput(key, event) {
    const val = event.target.value;
    setInput({ ...input, [key]: val });
  }

  function doSubmit(event) {
    event.preventDefault();
    // alert(props?.action);
    if (props?.action == "edit") {
      // alert("UPDATE");
      updateCatalogue(input.id, input);
    } else {
      createCatalogue({ ...input, type });
    }
  }

  useEffect(() => {
    if (_action === "CREATED_CATALOGUE") {
      navigate("/" + type);
    }
    if (_action === "UPDATED_CATALOGUE") {
      navigate("/" + input.type);
    } else if (_action === "FAILED_CREATE_CATALOGUE") {
      // alert(_message);
    } else if (_action === "READED_CATALOGUE") {
      setInput({ ..._read });
    }
  }, [_action]);

  useEffect(() => {
    console.log(params);
    if (props?.action == "edit") {
      readCatalogue(parseInt(id));
    } else {
      setInput({ type });
    }
  }, []);

  function onCancel(event) {
    // // alert("a");
    event.preventDefault();
    navigate(-1);
  }

  console.log("input", input, props);

  return (
    <Form onSubmit={doSubmit}>
      <Form.Group className="mb-3" controlId="formSKU">
        <Form.Label>Tipe</Form.Label>
        <Form.Control type="text" disabled value={input?.type} />
        <Form.Text className="text-muted">Tooltip</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSKU">
        <Form.Label>SKU</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => doInput("sku", ev)}
          placeholder="XXXXX1"
          maxlength="6"
          value={input?.sku}
        />
        <Form.Text className="text-muted">Tooltip</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSKU">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => doInput("nama", ev)}
          placeholder="Tomat"
          maxlength="40"
          value={input?.nama}
        />
        <Form.Text className="text-muted">Tooltip</Form.Text>
      </Form.Group>
      <Button
        variant="info"
        onClick={onCancel}
        style={{ marginRight: 10 }}
        type="cancel"
      >
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        {_loading ? "Loading..." : "Submit"}
      </Button>
    </Form>
  );
}

export default FormCatalogue;
