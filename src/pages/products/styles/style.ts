import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 780px;
  width: 100%;
  position: fixed;
  top: 3.5rem;
  z-index: 999;
  background-color: #fff;
`;

export const SecondContainer = styled.div`
  margin-top: 5.5rem;
`;

export const MapContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  height: calc(100vh - 56px - 48px);

  overflow: hidden;
`;

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem 4.5rem;

  background-color: #fff;
`;
