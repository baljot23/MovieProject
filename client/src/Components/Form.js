import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [option, setOption] = useState(1);

  return (
    <Container>
      <header>
        <HeaderHeadings
          className={
            option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot"
          }
        >
          <span>Sign in to your account</span>
          <span>Create an account</span>
          <span>Reset your password</span>
        </HeaderHeadings>
      </header>
      <Options>
        <li
          className={option === 1 ? "active" : ""}
          onClick={() => setOption(1)}
        >
          Sign In
        </li>
        <li
          className={option === 2 ? "active" : ""}
          onClick={() => setOption(2)}
        >
          Sign up
        </li>
        <li
          className={option === 3 ? "active" : ""}
          onClick={() => setOption(3)}
        >
          Forgot
        </li>
      </Options>
      <AccountForm onSubmit={(ev) => ev.preventDefault()}>
        <AccountFormField>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required={option === 1 || option === 2 ? true : false}
            disabled={option === 3 ? true : false}
          />
          <input
            id="repeat-password"
            name="repeat-password"
            type="password"
            placeholder="Repeat password"
            required={option === 2 ? true : false}
            disabled={option === 2 || option === 3 ? true : false}
          />
        </AccountFormField>
        <BtnSubmitForm type="submit">
          {option === 1
            ? "Sign in"
            : option === 2
            ? "Sign up"
            : "Reset password"}
        </BtnSubmitForm>
      </AccountForm>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  color: black;
  margin-top: 100px;
  margin-left: 40%;
  max-width: 2000px;
  min-width: 600px;
  width: 30%;
  height: 100%;

  > header {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 auto 60px auto;
    position: relative;
    height: 30px;
    width: 250px;
    overflow: hidden;
  }
`;

const HeaderHeadings = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  > span {
    margin: 3px 0;
  }

  &.sign-in {
    transform: translateY(-10);
  }

  &.sign-up {
    transform: translateY(-35px);
  }

  &.forgot {
    transform: translateY(-60px);
  }
`;

const Options = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  @media screen and (max-width: 380px) {
    width: 100%;
  }

  > li {
    padding: 10px;
    margin-left: 90px;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s ease;
  }

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }

  &:nth-of-type(2) {
    margin-left: 15px;
  }

  &:last-of-type {
    width: 93.5%;
    height: 55px;
  }
`;

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const AccountFormField = styled.div`
  display: flex;
  border: 2px solid pink;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &.sign-in {
    border: 2px solid magenta;

    max-height: 123px;
  }

  &.sign-up {
    max-height: 250px;
  }

  &.forgot {
    max-height: 61px;
  }

  > input {
    border: 0;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 1rem;
    font-family: Nunito, sans-serif;
    color: #000;
    border-radius: 5px;
  }

  &::placeholder {
    color: #aaa;
  }

  &::-webkit-input-placeholder {
    color: #aaa;
  }

  &:-ms-input-placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

const BtnSubmitForm = styled.button`
  border: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  padding: 15px 0;
  border-radius: 5px;
  color: purple;
  font-size: 1rem;
  font-family: Nunito, sans-serif;
  background: lighten($primary, 5%);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.13);
  transition: all 0.2s ease;

  &:hover {
    background: darken($primary, 2%);
  }

  &:active,
  &:focus {
    outline: none;
    background: darken($primary, 7%);
  }
`;

export default Form;
