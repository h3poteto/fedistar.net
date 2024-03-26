import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container, Content, Button } from 'rsuite'
import { BsClipboard } from 'react-icons/bs'
import { Icon } from '@rsuite/icons'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Help() {
  const copyDebugCommand = (text: string) => {
    navigator.clipboard.writeText(text)
  }

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
                <div id="debug_log">
                  <h2>Enable debug log</h2>
                  <p>
                    The above log files record only info, warning, and error logs. If you want to enable debug logs, please set the{' '}
                    <span style={{ backgroundColor: 'var(--rs-gray-700)', color: 'var(--rs-color-red)' }}>LOG_LEVEL</span> environment
                    variable to <span style={{ backgroundColor: 'var(--rs-gray-700)', color: 'var(--rs-color-red)' }}>debug</span>. For
                    example,
                  </p>
                  <div
                    style={{
                      backgroundColor: 'var(--rs-gray-700)',
                      width: '320px',
                      padding: '8px 0 8px 12px',
                      borderRadius: '4px',
                      margin: '8px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>$ LOG_LEVEL=debug fedistar</span>
                    <Button appearance="link" onClick={() => copyDebugCommand('LOG_LEVEL=debug fedistar')}>
                      <Icon as={BsClipboard} />
                    </Button>
                  </div>
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
