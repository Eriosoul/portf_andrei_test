import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const App = _ => {
  return (
    <div>
        <img src={images.img1}></img>
    </div>
  )
};

export default MyApp
