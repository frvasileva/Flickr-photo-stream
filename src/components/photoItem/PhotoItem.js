import React from "react";
import "./style.scss";
import PhotoDescription from "../PhotoDescription/PhotoDescription";
import PhotoTags from "../photoTags/PhotoTags";

function PhotoItem() {
  const item = {
    title: "Florida Visit_0290",
    link: "https://www.flickr.com/photos/patchey/49445730233/",
    media: {
      m: "https://live.staticflickr.com/65535/49445730233_814d5a72e3_m.jpg"
    },
    date_taken: "2020-01-14T17:49:04-08:00",
    description:
      ' <p><a href="https://www.flickr.com/people/patchey/">BarbPatch</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/patchey/49445730233/" title="Florida Visit_0290"><img src="https://live.staticflickr.com/65535/49445730233_814d5a72e3_m.jpg" width="240" height="180" alt="Florida Visit_0290" /></a></p> ',
    published: "2020-01-26T21:03:33Z",
    author: 'nobody@flickr.com ("BarbPatch")',
    author_id: "65518523@N00",
    tags: "florida sunset bradenton birds"
  };

  return (
    <div className="card photo-wrapper">
      <div className="photo">
        <a href={item.link} title={item.title}>
          <img src={item.media.m} className="card-img-top"></img>
        </a>
      </div>
      <div className="card-body">
        <PhotoDescription
          author={item.author}
          title={item.title}
          description={item.description}
        ></PhotoDescription>
        <hr />
        <PhotoTags tags={item.tags.split(" ")}></PhotoTags>
      </div>
    </div>
  );
}

export default PhotoItem;
