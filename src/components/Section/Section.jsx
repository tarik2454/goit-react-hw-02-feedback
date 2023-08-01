import { Container } from '../Container/Container';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
