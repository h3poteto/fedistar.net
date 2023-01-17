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
        <FlexboxGrid justify="center" align="middle" style={{ height: 120 }}>
          <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
            <a href="https://pleroma.io/users/h3poteto" target="_blank" rel="noopener noreferrer">
              Pleroma
            </a>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
            <a href="https://fedibird.com/@h3poteto" target="_blank" rel="noopener noreferrer">
              Mastodon
            </a>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
            <a href="https://github.com/h3poteto/fedistar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4} style={{ textAlign: 'center' }}>
            <Link href="/inquiry">Contact Us</Link>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center" align="middle" style={{ height: 48 }}>
          <FlexboxGrid.Item style={{ textAlign: 'center' }}>
            <p>&copy; 2023 h3poteto</p>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Footer>
    </>
  )
}

export default footer
