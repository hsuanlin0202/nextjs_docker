import Link from 'next/link'

const IndexPage = () => (
  <>
    <h1>這是測試部署頁面</h1>
    <p>
      <Link href="/driverCare">
        <a>旅遊專車</a>
      </Link>
    </p>
  </>
)

export default IndexPage
