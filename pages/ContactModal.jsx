import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

const ModalContainer = styled.div`
  width: 355px;
  /* height: 200px; */
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 1px solid #999;
  border-radius: 8px;
  background: white;
  color: #999;
  font-size: 14px;
  padding: 0.6rem 1rem;
  width: 155px;
  &:active {
    background: #f5f5f5;
  }
`;

const ButtonSubmit = styled(Button)`
  background: #7f56d9;
  color: white;
  border: none;
  &:active {
    background: #6941c6;
  }
`;

const ContactModal = ({onClose}) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalBody>
          <img src="/icons/message.svg" alt="Contact" style={{background: 'black'}} />
          <h1>Contact Us Via Email</h1>
          <p>Any Questions? Send us an email at prolog@profy.dev. We usually answer by 24 hours.</p>
          <ModalButtons>
            <Button onClick={onClose}>Cancel</Button>
            <a href="mailto:takeme@there.com">
              <ButtonSubmit onClick={onClose}>Open Email App</ButtonSubmit>
            </a>
          </ModalButtons>
        </ModalBody>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ContactModal;
