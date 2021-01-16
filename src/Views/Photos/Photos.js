import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import AlbumCard from "../../components/AlbumCard";
import "./styles.css";
import { connect } from "react-redux";
import { MapStateToProps } from "../../config/MapStateToProps";
import {
  fetchPhotos,
  fetchUsers,
  fetchAlbums,
} from "../../redux/actions/MainActions";
import AlbumImage from "../../components/AlbumImages";

function Photos(props) {
  const [Photos, setPhotos] = useState([]);
  const [SelectedAlbum, setSelectedAlbum] = useState({});
  const [SelectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    props.fetchPhotos();

    setSelectedAlbum(props.history.location.state.data);
  }, []);

  useEffect(() => {
    setPhotos(props.main?.photos);
  }, [props.main?.photos]);

  // props.history.location.state.id

  return (
    <div>
      <Header />

      <div className="MainPhotoContainer">
        <h3>{SelectedAlbum?.title}</h3>
        {SelectedImage ? (
          <img className="MainImage" alt="test" src={SelectedImage} />
        ) : null}
      </div>

      <div className="ListPhotos">
        {Photos.filter((pics) => pics.albumId == SelectedAlbum.id).map(
          (item, i) => (
            <AlbumImage
              setImage={() => setSelectedImage(`${item.thumbnailUrl}.jpg`)}
              key={i}
              thumbnailUrl={item.thumbnailUrl}
            />
          )
        )}
      </div>
    </div>
  );
}

export default connect(MapStateToProps, { fetchPhotos })(Photos);
