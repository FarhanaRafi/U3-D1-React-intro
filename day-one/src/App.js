import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="Click Me" buttonCss="button" />

        <ImageComponent
          imageCss="img"
          image="https://th-thumbnailer.cdn-si-edu.com/wVkY4ktA-0JvRsuh8EASm6NoSNs=/1000x750/filters:no_upscale():focal(978x630:979x631)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/82/db8234fc-f167-4285-82bd-123d035e32ad/cats.jpg"
          name="cat"
        />

        <a
          className="App-link"
          href="https://pixabay.com/images/search/cat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonComponent buttonText="View more" buttonCss="button-link" />
        </a>
      </header>
    </div>
  );
}

export default App;
