import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #f5f7f9;
  min-height: 100vh;
  overflow: hidden;
`;

export const Subcontainer = styled.div`
  padding: 16px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
