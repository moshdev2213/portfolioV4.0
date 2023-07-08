import { Modal, useModal, Button, Text, Link } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";

export default function ProjectModal({ des,head,url }) {
    const { setVisible, bindings } = useModal();
    return (
        <div>
              <span onClick={() => setVisible(true)} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaEye  />
                </span>
           
            <Modal
                scroll
                blur
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text transform="uppercase" id="modal-title" size={18}>
                        {head}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text  id="modal-description">
                        {des}
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                    <Link target="_blank" href={url}>
                        <Button auto color="success">
                            Browse Code
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
