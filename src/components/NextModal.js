import React from "react";
import { Modal, Input, Row, Button, Text,User } from "@nextui-org/react";
import { FaPhone,FaMailBulk } from "react-icons/fa";
import propic from "../assets/images/imgpropic.jpg"


export default function NextModal({}) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return (
      <div>
        <User
              bordered
              color = {"secondary"}
              src={propic}
              size="md"
              pointer
              zoomed
              name="M Shabeer"
              onClick={handler}
            >
               <User.Link color="secondary" href="https://github.com/moshdev2213">@moshdev2213</User.Link>
            </User>
       
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome Mate
              <Text b size={18}>
                 😃💗
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              disabled
              fullWidth
              color="primary"
              size="lg"
              placeholder="moshdev2213@gmail.com"
              contentLeft={ <FaMailBulk fill="currentColor"/>  }
            />
            <Input
              clearable
              bordered
              fullWidth
              disabled
              color="primary"
              size="lg"
              placeholder="+94 78 5******"
              contentLeft={ <FaPhone fill="currentColor"/>  }
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button shadow color="secondary" auto onPress={closeHandler}>
              Download CV
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}
