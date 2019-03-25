import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="tex">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            in fugit numquam iste expedita vero tempore praesentium aperiam nam
            perferendis laudantium ex, officia molestias reiciendis quasi ipsum
            quisquam dolores et doloribus corporis possimus sit itaque. Ea,
            fugit aspernatur? Adipisci veritatis laboriosam corrupti. Eveniet
            ratione odit debitis aperiam soluta doloribus incidunt!
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
