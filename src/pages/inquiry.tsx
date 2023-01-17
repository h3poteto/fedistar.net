import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container, Content, Form, ButtonToolbar, Button, Input } from "rsuite";
import { forwardRef } from "react";

import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Textarea = forwardRef<HTMLTextAreaElement>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

export default function Inquiry() {
  return (
    <>
      <Head>
        <title>Inqiury - Fedistar</title>
        <meta
          name="description"
          content="Multi-column Mastodon and Pleroma client for desktop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={inter.className}>
          <Content className={styles.content}>
            <div style={{ marginTop: "2vh" }}>
              <h1 style={{ fontWeight: 300 }}>Contact Us</h1>
            </div>
            <div style={{ marginTop: "8vh" }}>
              <Form fluid>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" />
                </Form.Group>
                <Form.Group controlId="body">
                  <Form.ControlLabel>Message</Form.ControlLabel>
                  <Form.Control name="body" rows={5} accepter={Textarea} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary">Submit</Button>
                    <Button appearance="default">Cancel</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </div>
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  );
}
