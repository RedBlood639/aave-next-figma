import styled from "styled-components";
import React from "react";
const CustomLoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  background: rgba(188, 0, 0, 0.7);
  flex-direction: column;
`;
const CustomLoadingContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: #fff000;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
    @keyframes animateC {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export const Label = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff000;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #fff000;
  }
`;

const Loading = () => {
    return (
        <CustomLoadingWrapper>
            <CustomLoadingContent>
                Loading
                <Label />
            </CustomLoadingContent>
        </CustomLoadingWrapper>
    );
};

export default Loading;
