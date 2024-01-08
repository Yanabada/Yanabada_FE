import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 780px;
  display: block;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 3.5rem;
  background: linear-gradient(231deg, #5d99f2 35.76%, #5ed8ff 83.56%);
`;

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--Stroke_LightGray, #f2f2f2);
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);

  .bell {
    width: 1.375rem;
    height: 1.375rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const BellContainer = styled.div``;

export const GotoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.9375rem;
  gap: 0.125rem;
  padding: 0.7rem 0.5rem;
  border-radius: 3px;
  background: rgba(242, 242, 242, 0.3);
  cursor: pointer;
`;

export const GotoText = styled.p`
  color: #fff;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 0.9375rem;
`;
