import Head from 'next/head'
import { Inter } from '@next/font/google'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import { Container, Content, Divider } from 'rsuite'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>PrivacyPolicy - Fedistar</title>
      </Head>
      <main>
        <Container className={inter.className}>
          <Content className={styles.content}>
            <div style={{ marginTop: '2vh' }}>
              <h1>Privacy Policy</h1>
            </div>
            <div style={{ marginTop: '8vh' }}>
              <div className="privacy-policy">
                <p className="important">
                  We don't collect any data from you, but Fedistar needs to store some of it at local in order to enable certain features.
                </p>
                <Divider />
                <h2>Information Collection</h2>
                <p>
                  We don't collect your personal data, like email, password or cookie. Fedistar store some different types of information in
                  your storage, but we don't collect these information.
                </p>
                <h3>Types of Data Stored</h3>
                <ul>
                  <li>Access Token</li>
                </ul>
                <h4>Access Token</h4>
                Fedistar stores Access Token in your storage to access Mastodon or Pleroma server. The Access Token does not include your
                personal data, but it can access your account of Mastodon or Pleroma.
                <Divider />
                <h2>Mastodon or Pleroma</h2>
                <p>
                  Fedistar is a Mastodon or Pleroma client and as such it needs to make many requests to Mastodon or Pleroma. Please read
                  Mastodon or Pleroma's privacy policy for more details on what they may do whith that data.
                </p>
                <Divider />
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please <Link href="/inquiry">Contact Us</Link>
                </p>
              </div>
            </div>
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  )
}
