import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Image,
  Card
} from "react-bootstrap";
import { addToCart } from "../";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  return <div>Cart here!!</div>;
};

export default CartScreen;
