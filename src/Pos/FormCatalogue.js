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

  const _validation = useSelector((state) => state?.core?.Validation) || {};

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
      updateCatalogue(id, input);
    } else {
      createCatalogue({ ...input, tipe: type }, type);
    }
  }

  useEffect(() => {
    if (_action === "CREATED_CATALOGUE") {
      navigate("/" + type);
    }
    if (_action === "UPDATED_CATALOGUE") {
      navigate("/" + input.tipe);
    } else if (_action === "FAILED_CREATE_CATALOGUE") {
      // alert(_message);
    } else if (_action === "READED_CATALOGUE") {
      setInput({ ..._read });
    }
  }, [_action]);

  useEffect(() => {
    console.log(params);
    if (props?.action == "edit") {
      readCatalogue(id);
    } else {
      setInput({ tipe: type });
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
      <Form.Group className="mb-3">
        <Form.Label>Tipe</Form.Label>
        <Form.Control type="text" disabled value={input?.tipe} />
        <Form.Text className="text-muted">
          {_validation?.tipe?.join(", ")}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>SKU</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => doInput("sku", ev)}
          placeholder="XXXXX1"
          maxlength="6"
          value={input?.sku}
        />
        <Form.Text className="text-muted">
          {_validation?.sku?.join(", ")}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => doInput("nama", ev)}
          placeholder="Tomat"
          maxlength="40"
          value={input?.nama}
        />
        <Form.Text className="text-muted">
          {_validation?.nama?.join(", ")}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Harga</Form.Label>
        <Form.Control
          type="number"
          onChange={(ev) => doInput("harga", ev)}
          placeholder="0"
          value={input?.harga}
        />
        <Form.Text className="text-muted">
          {_validation?.harga?.join(", ")}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => doInput("kategori", ev)}
          placeholder="FastFood"
          value={input?.kategori}
        />
        <Form.Text className="text-muted">
          {_validation?.kategori?.join(", ")}
        </Form.Text>
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
