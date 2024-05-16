import styled from "styled-components";

export const ControlledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  > img {
    position: absolute;
    right: 1rem;
    bottom: 1.5rem;
    cursor: pointer;
  }
`;


export const Label = styled.label`
  color: red;
  font-family: sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


export const Input = styled.input`
  height: 5rem;
  padding: 1.2rem 2rem;
  outline: none;
  border: 1px solid red;
  color: red;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all ease-in 100ms;
  width: 100%;

  &::placeholder {
    color: red;
  }

  &:hover {
  }

  &:focus {
    border: 1.5px solid red;
  }

  &[type="checkbox"] {
    accent-color: red;
    width: auto;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const Textarea = styled.textarea`
  height: 5rem;
  padding: 1.2rem 6.4rem 1.2rem 2rem;
  outline: none;
  border: 1px solid red;
  color: red;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all ease-in 100ms;
  width: 100%;
  resize: vertical;
  min-height: 15rem;

  &::placeholder {
    color: red
  }

  &:hover {
  }

  &:focus {
    border: red
  }
`;

export const ErrorMessage = styled.span`
  color: var(--tints_red_100);
  font-family: sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
