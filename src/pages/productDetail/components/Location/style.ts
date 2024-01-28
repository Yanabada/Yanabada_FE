import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #fff;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 10rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Address = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body1};
`;

export const CopyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 4.5rem;
  padding: 0.4375rem 0.75rem;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.gray[100]};
  white-space: nowrap;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const TrafficContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
  ${({ theme }) => theme.text.subtitle5};
`;

export const TrafficText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2};
`;
