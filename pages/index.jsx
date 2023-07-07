import {useState} from 'react';
import styled from 'styled-components';
import {Routes} from '@config/routes';
import Header from './Header';
import Nav from './Nav';
import ContactModal from './ContactModal';
import useServiceData from './useServiceData';

const ContactButton = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;
  &:hover {
    background: #6941c6;
  }
`;

const OpenDashboardButton = styled.a`
  display: inline-block;
  padding: 0.7rem 1rem;
  color: white;
  font-size: 16px;
  background: #7f56d9;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const handleContactClick = () => setShowContactModal(true);
  const closeContactClick = () => setShowContactModal(false);

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <Nav />
        <OpenDashboardButton href={Routes.projects}>Open Dashboard</OpenDashboardButton>
      </Header>

      <Content slug="home" />

      <ContactButton onClick={handleContactClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {showContactModal && <ContactModal onClose={closeContactClick} />}
    </div>
  );
};

const Title = styled.h1`
  color: var(--gray-900, #101828);
  text-align: center;
  /* Display xl/Semibold */
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: -1.2px;
`;

const Subtitle = styled.h2`
  color: var(--gray-500, #667085);
  text-align: center;
  /* Text xl/Normal */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const Section = styled.section`
  display: flex;
  padding: 96px 0px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`;

function Content({slug}) {
  const dataPage = useServiceData(slug);
  const heroSection = dataPage?.sections?.find(section => section.sectionType === 'hero');
  console.log('heroSection = ', heroSection);
  return heroSection ? (
    <Section>
      <Title>{heroSection.title}</Title>
      <Subtitle>{heroSection.subtitle}</Subtitle>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroSection.image.src}
        alt="Prolog logo"
        width={heroSection.image.width}
        height={heroSection.image.height}
      />
    </Section>
  ) : null;
}

export default IssuesPage;
