import React, { useEffect, useState } from "react";
import styles from "./ImgAdPopup.module.scss";
import config from "@/utils/config";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function ImgAdPopup({ isOpen, onClose, adMobile, adDesk }) {
  const [isMobile, setMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 500) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, []);

  return (
    // <div className={styles.popup_wrapper}>
    //   <div className={styles.popup_container}>
    //     <button
    //       className={styles.btn_close_popup}
    //       onClick={() => setPopup(false)}
    //     >
    //       Close
    //     </button>
    //     <img
    //       loading='lazy'
    //       src={`${config.imageURL}${isMobile ? adMobile : adDesk}`}
    //     />
    //   </div>
    // </div>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={{ base: "800px" }}>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p={2} w={{ base: "90%", md: "800px" }} pos="relative">
          <Image
            src={`${config.imageURL}${isMobile ? adMobile : adDesk}`}
            borderRadius={6}
          />
          <Button
            colorScheme="linkedin"
            pos="absolute"
            bottom="1rem"
            left="50%"
            transform="translateX(-50%)"
            onClick={() => router.push("/DopaNeetCoaching")}
          >
            Join Now
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
