import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../../images/rating.svg"

export const Background = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const BanerContainer = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto 4.6%;
`;

export const Shadow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Baner = styled.img`
  width: 100%;
  max-height: 770px;
  max-width: 1368px;
  z-index: 2;
`;

export const MovieInfo = styled.div`
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  z-index: 3;
  padding: 0 0 56px 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0 32px 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding-bottom: 9px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 44px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 24px;
    margin-bottom: 5.5px;
  }
`;

export const Stats = styled.div`
  display: flex;
  max-width: 180px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 7px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 2px;
    max-height: 20px;
  }
`;

export const RatingIcon = styled(RatingStar)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 24px;
    width: 24px;
    margin-right: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 16px;
    width: 16px;
    margin-right: 2px;
  }
`;

export const Rating = styled.p`
  font-size: 30px;
  font-weight: 500;
  line-height: 130%;
  margin: 0 1px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 14px;
  }
`;

export const RatingScale = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  padding-top: 12px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
    margin: 0 6px 0 5px;
    padding-top: 7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
    margin: 0 6px 0 0;
    padding-top: 5px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
  }
`;