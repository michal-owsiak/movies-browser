import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../../images/logo.svg";

export const StyledNavigation = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 19px;
    margin-bottom: 12px;
  };
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  };
`;

export const Logo = styled(LogoIcon)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 17px;
    width: 17px;
  };
`;

export const Caption = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  width: 168px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    letter-spacing: -0.5px;
    width: 95px;
  };
`;

export const PageLink = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 14px 24px;

  &:active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: 8px 12px;
  };
`;