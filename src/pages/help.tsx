import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container, Content } from 'rsuite'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Help() {
  return (
    <>
      <Head>
        <title>Help - Fedistar</title>
      </Head>
      <main>
        <Container className={inter.className}>
          <Content className={styles.content}>
            <div style={{ marginTop: '2vh' }}>
              <h1>Help</h1>
            </div>
            <div style={{ marginTop: '8vh' }}>
              <div className="help">
                <div id="crash_reporting">
                  <h2>How to send crash reports?</h2>
                  <p>
                    Please send an inquiry from <Link href="/inquiry">here</Link>, or please create an issue on{' '}
                    <Link href="https://github.com/h3poteto/fedistar/issues/new">GitHub</Link>. At that time, we would be happy if you
                    attach your logs. You can find the logs in
                  </p>
                  <ul style={{ lineHeight: '2.5em' }}>
                    <li>
                      Windows: <code>~/AppData/Roaming/fedistar/fedistar.log</code>
                    </li>
                    <li>
                      MacOS: <code>~/Library/Application Support/fedistar/fedistar.log</code>
                    </li>
                    <li>
                      Linux: <code>~/.local/share/fedistar/fedistar.log</code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  )
}
