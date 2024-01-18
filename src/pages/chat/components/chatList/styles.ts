import styled from "@emotion/styled";

export const List = styled.div`
  position: relative;
  display: flex;
  padding: 14px;
  align-items: flex-start;
  gap: 12px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-top: 0.5px solid ${({ theme }) => theme.colors.gray[100]};
  z-index: 2;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const NickName = styled.span`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.text.button1};
`;

export const RoomName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  max-width: 140px;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  padding: 3px !important;

  color: ${({ theme }) => theme.colors.gray[500]};
  ${({ theme }) => theme.text.body3};
`;

export const ChatText = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;

export const TimeText = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;
