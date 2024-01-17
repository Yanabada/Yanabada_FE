import styled from "@emotion/styled";

interface PurchaseProps {
  width?: string;
}

export const ReservationContainer = styled.div<PurchaseProps>`
  width: ${({ width }) => width || "360px"};
  height: 100%;
  display: flex;
  padding: 20px 14px;
  gap: 20px;
  flex-direction: column;

  background-color: #fff;
`;

export const Spacer = styled.div`
  display: flex;
  width: 360px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const AccommodationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonnelInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  margin-top: 16px;
`;

export const PersonalInfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;
