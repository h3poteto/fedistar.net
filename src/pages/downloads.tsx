import Head from 'next/head'
import { Inter } from 'next/font/google'
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
import { GetStaticProps } from 'next'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit()
const inter = Inter({ subsets: ['latin'] })

type ReleaseData = {
  url: string
  name: string
}

type Props = {
  release: {
    windows: ReleaseData | null
    macos: ReleaseData | null
    appImage: ReleaseData | null
    deb: ReleaseData | null
  }
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {
    data: { assets }
  } = await octokit.repos.getLatestRelease({
    owner: 'h3poteto',
    repo: 'fedistar'
  })

  const assetPerPlatforms = {
    windows: assets.find(asset => asset.name.includes('msi')),
    macos: assets.find(asset => asset.name.includes('dmg')),
    appImage: assets.find(asset => asset.name.includes('AppImage')),
    deb: assets.find(asset => asset.name.includes('deb'))
  }

  return {
    props: {
      release: {
        windows: assetPerPlatforms.windows
          ? { url: assetPerPlatforms.windows.browser_download_url, name: assetPerPlatforms.windows.name }
          : null,
        macos: assetPerPlatforms.macos ? { url: assetPerPlatforms.macos.browser_download_url, name: assetPerPlatforms.macos.name } : null,
        appImage: assetPerPlatforms.appImage
          ? { url: assetPerPlatforms.appImage.browser_download_url, name: assetPerPlatforms.appImage.name }
          : null,
        deb: assetPerPlatforms.deb ? { url: assetPerPlatforms.deb.browser_download_url, name: assetPerPlatforms.deb.name } : null
      }
    },
    revalidate: 60
  }
}

export default function Downloads(props: Props) {
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
                {props.release.windows && (
                  <div style={{ margin: '8px 0' }}>
                    <h2 style={{ borderBottom: '1px solid var(--rs-divider-border)' }}>Windows</h2>
                    <Button appearance="primary" href={props.release.windows.url} startIcon={<WindowsIcon />}>
                      {props.release.windows.name}
                    </Button>
                  </div>
                )}

                {props.release.macos && (
                  <>
                    <h2 style={{ borderBottom: '1px solid var(--rs-divider-border)' }}>MacOS</h2>
                    <div style={{ margin: '8px 0' }}>
                      <Link href="https://apps.apple.com/us/app/fedistar/id6445863996" target="_blank" rel="noopener noreferrer">
                        <Image src="/app-store.svg" alt="Download from Mac App Store" width={156} height={40} />
                      </Link>
                    </div>
                    <div style={{ margin: '8px 0' }}>
                      <Button appearance="primary" href={props.release.macos.url} startIcon={<AppleIcon />}>
                        {props.release.macos.name}
                      </Button>
                    </div>
                  </>
                )}

                {(props.release.appImage || props.release.deb) && (
                  <>
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

                      {props.release.appImage && (
                        <Button appearance="primary" href={props.release.appImage.url} startIcon={<LinuxIcon />}>
                          {props.release.appImage.name}
                        </Button>
                      )}
                    </div>

                    {props.release.deb && (
                      <div style={{ margin: '8px 0' }}>
                        <Button appearance="primary" href={props.release.deb.url} startIcon={<LinuxIcon />}>
                          {props.release.deb.name}
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  )
}
