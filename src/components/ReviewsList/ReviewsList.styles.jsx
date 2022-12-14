import styles from 'styled-components';

export const Wrapper = styles.div`
padding: 15px;
`;

export const List = styles.ul`
`;

export const Item = styles.li`
border-bottom: 1px dashed #c865f7;
padding: 15px;
`;

export const Author = styles.h3`
margin-bottom: 7px;
`;

export const Content = styles.p`
`;

export const Alert = styles.h3`
padding: 15px;
color: ${p => p.theme.colors.accent}`;

export const WrapperBtn = styles.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const Btn = styles.button`
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
