import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Container, Content, Form, ButtonToolbar, Button, Input, Schema, useToaster, Message } from 'rsuite'
import { forwardRef, useRef, useState } from 'react'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Textarea = forwardRef<HTMLTextAreaElement>((props, ref) => <Input {...props} as="textarea" ref={ref} />)

type FormValue = {
  email: string
  message: string
}

export default function Inquiry() {
  const [formValue, setFormValue] = useState<FormValue>({
    email: '',
    message: ''
  })
  const formRef = useRef<any>()
  const toast = useToaster()

  const model = Schema.Model({
    email: Schema.Types.StringType().isEmail('Please enter a valid email address.').isRequired('This field is required'),
    message: Schema.Types.StringType().isRequired('This field is required.')
  })

  const handleSubmit = async () => {
    if (formRef === undefined || formRef.current === undefined) {
      return
    }
    if (!formRef.current.check()) {
      return
    }

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue)
      }

      const response = await fetch('/api/inquiry', options)
      const result = await response.json()

      if (response.status === 200) {
        console.debug(result)
        clear()
        toast.push(
          <Message showIcon type="success" duration={5000}>
            Receive your message
          </Message>,
          { placement: 'topCenter' }
        )
      } else {
        toast.push(
          <Message showIcon type="error" duration={5000}>
            Failed to send message
          </Message>,
          { placement: 'topCenter' }
        )
      }
    } catch (err) {
      console.error(err)
      toast.push(
        <Message showIcon type="error" duration={5000}>
          Failed to send message
        </Message>,
        { placement: 'topCenter' }
      )
    }
  }

  const clear = () => {
    setFormValue({
      email: '',
      message: ''
    })
  }

  return (
    <>
      <Head>
        <title>Inqiury - Fedistar</title>
        <meta name="description" content="Multi-column Mastodon and Pleroma client for desktop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={inter.className}>
          <Content className={styles.content}>
            <div style={{ marginTop: '2vh' }}>
              <h1 style={{ fontWeight: 300 }}>Contact Us</h1>
            </div>
            <div style={{ marginTop: '8vh' }}>
              <Form fluid model={model} ref={formRef} onChange={setFormValue} formValue={formValue}>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.ControlLabel>Message</Form.ControlLabel>
                  {/** @ts-ignore **/}
                  <Form.Control name="message" rows={5} accepter={Textarea} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                    <Button appearance="default" onClick={clear}>
                      Cancel
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </div>
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  )
}
