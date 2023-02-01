interface ImageDisplayProps {
  src: string;
}

const ImageDisplay = ({ src }: ImageDisplayProps): JSX.Element => {
  return (
    <div className="row">
      <div className="container-gif offset-1 col-6">
        <img src={src} alt="s" className="gif" />
      </div>
    </div>
  );
};

export default ImageDisplay;
