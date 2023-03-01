import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Button, Container, Content } from 'rsuite'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import WindowsIcon from '@rsuite/icons/legacy/Windows'
import AppleIcon from '@rsuite/icons/legacy/Apple'
import LinuxIcon from '@rsuite/icons/legacy/Linux'
import { Icon } from '@rsuite/icons'
import { BsClipboard } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Downloads() {
  const copyAUR = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <Head>
        <title>Downloads - Fedistar</title>
      </Head>
      <main>
        <Container className={inter.className}>
          <Content className={styles.content}>
            <div style={{ marginTop: '2vh' }}>
              <h1>Downloads</h1>
            </div>
            <div style={{ marginTop: '8vh' }}>
              <div className="downloads">
                <div style={{ margin: '8px 0' }}>
                  <h2 style={{ borderBottom: '1px solid var(--rs-divider-border)' }}>Windows</h2>
                  <Button
                    appearance="primary"
                    href="https://github.com/h3poteto/fedistar/releases/download/v0.1.0/fedistar_0.1.0_x64_en-US.msi"
                    startIcon={<WindowsIcon />}
                  >
                    Fedistar-1.0.0-x64.msi
                  </Button>
                </div>
                <h2 style={{ borderBottom: '1px solid var(--rs-divider-border)' }}>MacOS</h2>
                <div style={{ margin: '8px 0' }}>
                  <Link href="https://apps.apple.com/us/app/fedistar/id6445863996" target="_blank" rel="noopener noreferrer">
                    <Image src="/app-store.svg" alt="Download from Mac App Store" width={156} height={40} />
                  </Link>
                </div>
                <div style={{ margin: '8px 0' }}>
                  <Button
                    appearance="primary"
                    href="https://github.com/h3poteto/fedistar/releases/download/v0.1.0/fedistar_0.1.0_universal.dmg"
                    startIcon={<AppleIcon />}
                  >
                    Fedistar-1.0.0-universal.dmg
                  </Button>
                </div>
                <h2 style={{ borderBottom: '1px solid var(--rs-divider-border)' }}>Linux</h2>
                <div style={{ margin: '8px 0' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--rs-gray-700)',
                      width: '240px',
                      padding: '8px 0 8px 12px',
                      borderRadius: '4px',
                      margin: '8px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>$ yay -S fedistar-bin</span>
                    <Button appearance="link" onClick={() => copyAUR('yay -S fedistar-bin')}>
                      <Icon as={BsClipboard} />
                    </Button>
                  </div>
                  <Button
                    appearance="primary"
                    href="https://github.com/h3poteto/fedistar/releases/download/v0.1.0/fedistar_0.1.0_amd64.AppImage"
                    startIcon={<LinuxIcon />}
                  >
                    Fedistar-1.0.0-amd64.AppImage
                  </Button>
                </div>
                <div style={{ margin: '8px 0' }}>
                  <Button
                    appearance="primary"
                    href="https://github.com/h3poteto/fedistar/releases/download/v0.1.0/fedistar_0.1.0_amd64.deb"
                    startIcon={<LinuxIcon />}
                  >
                    Fedistar-1.0.0-amd64.deb
                  </Button>
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
