import styled from "@emotion/styled";
import { MdCancel } from "react-icons/md";

export const RecentSearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RecordContainer = styled.div`
  display: flex;
`;

export const RecordBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7rem;
  height: 5rem;
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  position: relative;
`;

export const Location = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.text.button2};
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;

export const User = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;

export const CancelIcon = styled(MdCancel)`
  position: absolute;
  top: 6%;
  right: 7%;
  color: ${({ theme }) => theme.colors.gray[600]};
`;
