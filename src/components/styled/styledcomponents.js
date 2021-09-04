import { InputBase } from "@material-ui/core";
import styled from "styled-components";

export const ButtonLogin = styled.button`
  background-color: #111;
  &:hover{
      background-color:gray;
  };
 
 color:#fff;
 width:100px;
 padding:10px;
 font-size:20px;
 text-transform:inherit;
 border-radius:5px;

 border:none;
 cursor: pointer;
  };
`;
export const AppArtInput = styled(InputBase)`
  background: #fff;
  padding: 25.5px;
  height: 30px;
  width: 300px;
  border-radius: 5px;
  border: none;
`;
