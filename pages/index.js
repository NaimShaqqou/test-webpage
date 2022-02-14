import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Naim Welcomes You to this Page" />
        <p className="description">
          He will be using this page as a learning experience. Come back later to see any changes.</br>
          (if you are seeing this text, I goofed up a bit lol)
        </p>
      </main>

      <Footer />
    </div>
  )
}
