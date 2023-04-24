import Link from 'next/link'
import { FlexboxGrid, Footer } from 'rsuite'

const footer = () => {
  return (
    <>
      <Footer
        style={{
          backgroundColor: 'var(--rs-sidenav-default-bg)',
          marginTop: '8vh'
        }}
      >
        <FlexboxGrid justify="center" align="top" style={{ height: 'auto', paddingTop: 24, paddingBottom: 12 }}>
          <FlexboxGrid.Item style={{ textAlign: 'left', width: '180px' }}>
            <h5>Fedistar</h5>
            <p style={{ lineHeight: '24px' }}>
              <Link href="/">Fedistar</Link>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <Link href="/downloads">Downloads</Link>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <Link href="/help">Help</Link>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://github.com/h3poteto/fedistar" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <Link href="/privacy_policy">Privacy Policy</Link>
            </p>

            <p style={{ lineHeight: '24px' }}>
              <Link href="/inquiry">Contact Us</Link>
            </p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item style={{ textAlign: 'left', width: '180px' }}>
            <h5>Whalebird</h5>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://whalebird.social" target="_blank" rel="noopener noreferrer">
                Whalebird
              </a>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://whalebird.social/desktop/contents/downloads" target="_blank" rel="noopener noreferrer">
                Downloads
              </a>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://github.com/h3poteto/whalebird-desktop" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </p>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://whalebird.social/desktop/privacy_policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item style={{ textAlign: 'left', width: '180px' }}>
            <h5>About Us</h5>
            <p style={{ lineHeight: '24px' }}>
              <a href="https://pleroma.io/users/fedistar" target="_blank" rel="noopener noreferrer">
                Pleroma
              </a>
            </p>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center" align="middle" style={{ height: 48 }}>
          <FlexboxGrid.Item style={{ textAlign: 'center' }}>
            <p>
              &copy; 2023{' '}
              <a href="https://pleroma.io/users/h3poteto" target="_blank" rel="noopener noreferrer">
                Akira Fukushima
              </a>
            </p>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Footer>
    </>
  )
}

export default footer
