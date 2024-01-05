import styled from "@emotion/styled";

export const TextButton = styled.button`
  display: inline-flex;
  height: 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  color: var(--ConfirmBlue, #0751c3);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  white-space: nowrap;
  padding: 0px 10px;

  &:hover {
    background: var(--LightBlue, #e6eef9);
    color: var(--ConfirmBlue, #0751c3);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }
`;
