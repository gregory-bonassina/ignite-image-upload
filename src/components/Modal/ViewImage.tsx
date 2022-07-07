import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          mx="auto"
          w="auto"
          h="auto"
          maxW={['300px', '500px', '900px']}
          maxH={['350px', '450px', '600px']}
        >
          <ModalBody padding="0" bgColor="pGray.800">
            <Image
              src={imgUrl}
              maxW={['100%']}
              maxH={['350px', '450px', '600px']}
            />
          </ModalBody>
          <ModalFooter
            justifyContent="start"
            padding="2"
            h="2rem"
            bgColor="pGray.800"
            borderRadius="0px 0px 6px 6px"
          >
            <Link href={imgUrl} isExternal fontSize="1rem">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
