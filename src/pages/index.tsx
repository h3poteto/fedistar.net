import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button, Container, Content } from "rsuite";
import { Icon } from "@rsuite/icons";
import { BsCloudDownload } from "react-icons/bs";

import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fedistar</title>
        <meta
          name="description"
          content="Multi-column Mastodon and Pleroma client for desktop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={inter.className}>
          <Content style={{ minHeight: "100vh" }} className={styles.content}>
            <div style={{ marginTop: "16vh" }}>
              <h1 style={{ fontWeight: 300 }}>Fedistar</h1>
            </div>
            <div style={{ marginBottom: "4rem" }}>
              <h3 style={{ fontWeight: 200 }}>
                Multi-column Mastodon and Pleroma client application for desktop
              </h3>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "620px",
              }}
            >
              <Image
                src="/basic_timeline.png"
                alt="Basic screenshot"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", marginTop: "2rem" }}>
              <a
                href="https://github.com/h3poteto/fedistar/releases"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", margin: "0 auto" }}
              >
                <Button size="lg" color="violet" appearance="primary">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Icon
                      as={BsCloudDownload}
                      style={{ fontSize: "3rem", marginRight: "16px" }}
                    />
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontSize: "2rem",
                          lineHeight: "3rem",
                          fontWeight: 300,
                        }}
                      >
                        Download
                      </p>
                      <p style={{ fontWeight: 200, marginTop: 0 }}>
                        Alpha version is available
                      </p>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
          </Content>
          <Footer />
        </Container>
      </main>
    </>
  );
}
