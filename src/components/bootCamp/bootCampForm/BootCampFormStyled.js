import styled from "styled-components";

export const BootCampFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  .list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  .listItem {
    width: 300px;
    border: 1px solid #dbd7d8;
    border-radius: 14px;
    margin: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
  }

  button {
    width: 150px;
    display: block;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
