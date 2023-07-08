import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text,User } from "@nextui-org/react";
// import { FaGlobe } from "react-icons/fa";
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
              
              src={propic}
              size="md"
              pointer
              zoomed
              name="M Shabeer"
              onClick={handler}
            >
               <User.Link href="https://github.com/moshdev2213">@moshdev2213</User.Link>
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
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14}>Forgot password?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}
