import React from 'react';
import { Link, useMatch, LinkProps } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { amberDark, indigoDark } from '@radix-ui/colors';
import { breakpoints, font } from '@daohaus/ui';

type StyledLinkProps = {
  selected?: boolean;
} & LinkProps;

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
  selected?: boolean;
};

const LinkContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid ${amberDark.amber5};
  border-radius: 0.8rem;
  background: ${indigoDark.indigo2};
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${breakpoints.xs}) {
    border: none;
    font-size: ${font.size.xl};
    background: none;
  }
`;

const BodyNavContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: ${breakpoints.xs}) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  @media (min-width: ${breakpoints.xs}) {
    display: none;
  }
`;

// Add selected
const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${amberDark.amber9};
  display: ${({ selected }) => (selected ? 'none' : 'flex')};

  @media (min-width: ${breakpoints.xs}) {
    text-decoration: underline;
    text-decoration-color: ${amberDark.amber10};
    text-underline-offset: 0.7rem;
    display: block;
    color: ${({ selected }) =>
      selected ? indigoDark.indigo12 : amberDark.amber10};
  }
`;

const NavLink = ({ children, path, selected }: NavLinkProps) => {
  return (
    <StyledLink
      to={{
        pathname: path,
      }}
      selected={selected}
    >
      <LinkContainer>{children}</LinkContainer>
    </StyledLink>
  );
};

export const BodyNav = () => {
  const match = useMatch('/explore');
  const isHome = !match;
  return (
    <BodyNavContainer>
      <NavLink path="/" selected={isHome}>
        <StyledHamburgerMenu />
        Home
      </NavLink>
    </BodyNavContainer>
  );
};
