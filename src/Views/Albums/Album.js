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

function Album(props) {
  const [Albums, setAlbums] = useState([]);
  const [Users, setUsers] = useState([]);
  const [SelectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    props.fetchUsers();
    props.fetchAlbums();
  }, []);

  useEffect(() => {
    console.log(props);
    if (props.main?.albums?.length > 0) {
      setAlbums(props.main?.albums);
    }
    if (props.main?.users?.length > 0) {
      setSelectedUser(props.main?.users[0]);
      setUsers(props.main?.users);
    }
  }, [props.main?.albums, props.main?.users]);

  const selectUser = (val) => setSelectedUser(val);

  const onAlbumClick = (val) => {
    props.history.push("/photos", { data: val });
  };

  return (
    <div>
      <Header />

      <div className="BodyContainer">
        <div className="LeftContainer">
          {Albums.filter((albums) => albums.userId == SelectedUser?.id).map(
            (item, i) => (
              <AlbumCard
                onClick={() => onAlbumClick(item)}
                key={i}
                title={item.title}
                User={Users?.filter((user) => user.id == item.userId)[0]}
                image={"https://via.placeholder.com/150/92c952.jpg"}
              />
            )
          )}
        </div>
        <div className="RightContainer">
          <h4>Users:</h4>
          {Users.map((item, i) => (
            <p
              onClick={() => selectUser(item)}
              className={`users ${
                item.id == SelectedUser.id ? "selected" : ""
              }`}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default connect(MapStateToProps, {
  fetchPhotos,
  fetchUsers,
  fetchAlbums,
})(Album);
