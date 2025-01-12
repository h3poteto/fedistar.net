import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Container, Content, FlexboxGrid } from 'rsuite'
import { Icon } from '@rsuite/icons'
import { BsCloudDownload, BsCheck2Circle, BsCircle } from 'react-icons/bs'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fedistar</title>
      </Head>
      <main>
        <Container className={inter.className}>
          <Content style={{ minHeight: '100vh' }} className={styles.content}>
            <div style={{ marginTop: '16vh' }}>
              <h1 style={{ fontWeight: 300 }}>Fedistar</h1>
            </div>
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ fontWeight: 200 }}>Multi-column Fediverse client application for desktop</h3>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '620px'
              }}
            >
              <Image src="/basic_timeline.png" alt="Basic screenshot" fill style={{ objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '2rem' }}>
              <Link href="/downloads" rel="noopener noreferrer" style={{ display: 'block', margin: '0 auto' }}>
                <Button
                  size="lg"
                  color="violet"
                  appearance="primary"
                  startIcon={<Icon as={BsCloudDownload} />}
                  style={{ fontSize: '2rem', lineHeight: '3.5rem', fontWeight: '300' }}
                >
                  Download
                </Button>
              </Link>
            </div>
            <div style={{ paddingTop: '8rem' }}>
              <FlexboxGrid justify="center" align="middle">
                <FlexboxGrid.Item colspan={8}>
                  <h4>Supporting SNS</h4>
                  <ul style={{ listStyle: 'none', lineHeight: '42px', fontSize: '1.2rem' }}>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Mastodon
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Pleroma
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Friendica
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Firefish
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Gotosocial
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Pixelfed
                    </li>
                  </ul>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>
                  <div
                    style={{
                      position: 'relative',
                      width: '480px',
                      height: '380px'
                    }}
                  >
                    <Image src="/detail.png" alt="Compose" fill style={{ objectFit: 'contain' }} />
                  </div>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="center" align="middle">
                <FlexboxGrid.Item colspan={10}>
                  <div
                    style={{
                      position: 'relative',
                      width: '480px',
                      height: '380px'
                    }}
                  >
                    <Image src="/compose.png" alt="Compose" fill style={{ objectFit: 'contain' }} />
                  </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={10}>
                  <ul style={{ listStyle: 'none', lineHeight: '42px', fontSize: '1.2rem' }}>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Multiple accounts management
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Multiple columns
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> You can see timelines without sign in
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Desktop notification
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Streaming update
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Send reactions from another accounts
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Change column width
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Change color theme
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Search accounts/tags/statuses
                    </li>
                    <li>
                      <Icon as={BsCircle} style={{ marginRight: 12 }} /> Slow mode
                    </li>
                  </ul>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
            <div style={{ marginTop: '4vh' }}>
              <h3>Sponsors</h3>
              <div style={{ marginBottom: '2em' }}>
                <a href="https://github.com/throwException">
                  <img src="https://github.com/throwException.png" width="60px" alt="Stefan Thöni" style={{ borderRadius: '50%' }} />
                </a>
              </div>
              <p>Fedistar is free software. We don't monetize with advertisement. So your donation supports this project.</p>
              <div style={{ marginTop: '2vh' }}>
                <Button href="https://github.com/sponsors/h3poteto" appearance="primary">
                  GitHub Sponsor
                </Button>
              </div>
              <div style={{ marginTop: '1vh' }}>
                <Button href="https://www.patreon.com/h3poteto" appearance="link" style={{ backgroundColor: '#FF424D' }}>
                  <Image src="/patreon.png" alt="Patreon" width={108} height={22} />
                </Button>
              </div>
              <div style={{ marginTop: '1vh' }}>
                <Button href="https://liberapay.com/h3poteto" appearance="link" style={{ padding: 0 }}>
                  <Image src="/liberapay.png" alt="LiberaPay" width={128} height={56} />
                </Button>
              </div>
            </div>
          </Content>
          <Footer />
        </Container>
      </main>
    </>
  )
}
