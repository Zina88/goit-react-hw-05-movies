import styled from 'styled-components';

export const Div = styled.div`
  padding: 15px;
`;

export const List = styled.ul`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  margin-bottom: -7px;
  margin-right: -7px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const Item = styled.li`
  box-shadow: ${p => p.theme.boxShadow.primary};
  transition: all 300ms linear;
  margin-bottom: 7px;
  margin-right: 7px;
`;

export const Name = styled.h3`
  color: ${p => p.theme.colors.primary};
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Rating = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  padding: 2px;
  margin-bottom: 10px;
  height: 70%;
`;

export const Alert = styled.h3`
  color: ${p => p.theme.colors.accent};
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${p => p.theme.colors.accent};
  border: 1px solid ${p => p.theme.colors.accent};
  padding: 5px 15px 5px 15px;
  border-radius: 3px;
  transition: all 250ms linear;

  &:active,
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: white;
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;
