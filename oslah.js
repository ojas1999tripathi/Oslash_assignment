import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [Oslash_assignment, setOslash_assignment] = useState(0);
  const apiUrl = '' // enter url where api is hosted

  const TweetBox = () => {
    const [tweet, setTweet] = useState("");

    const postTweet = (e) => {
      e.preventDefault();
      var fd = new FormData();
      fd.append("tweet", tweet);
      axios
        .post(apiUrl + "/pt.php", fd)
        .then(function (response) {
          if (response.data.response === "success") {
            setOslash_assignment(Oslash_assignment === 1 ? 0 : 1);
          } else alert("Error: " + response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return (
      <div
        style={{
          padding: "10px",
          background: "#4C9BE5",
          borderRadius: "5px",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <form onSubmit={postTweet}>
          <textarea
            style={{ width: "100%" }}
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
          ></textarea>
          <button
            type={"submit"}
            disabled={tweet.length > 0 ? false : true}
            style={{ float: "right" }}
          >
            Post
          </button>
        </form>
      </div>
    );
  };

  const TweetList = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
      axios
        .get(apiUrl + "/gt.php")
        .then(function (response) {
          if (response.data.response === "success") {
            setTweets(response.data.result);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    const editTweet = (e, tweet_id, newtweet) => {
      e.preventDefault();
      var fd = new FormData();
      fd.append("tweet", newtweet);
      fd.append("tweet_id", tweet_id);
      axios
        .post(apiUrl + "/ut.php", fd)
        .then(function (response) {
          if (response.data.response === "success") {
            setOslash_assignment(Oslash_assignment === 1 ? 0 : 1);
          } else alert("Error: " + response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const deleteTweet = (e, tweet_id) => {
      e.preventDefault();
      var fd = new FormData();
      fd.append("tweet_id", tweet_id);
      axios
        .post(apiUrl + "/dt.php", fd)
        .then(function (response) {
          if (response.data.response === "success") {
            setOslash_assignment(Oslash_assignment === 1 ? 0 : 1);
          } else alert("Error: " + response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const SingleTweet = (props) => {
      const [isEditing, setIsEditing] = useState(0);
      const [newtweet, setNewtweet] = useState(props.info.tweet);
      return (
        <div
          style={{
            padding: "10px",
            marginBottom: "10px",
            background: "#eee",
            overflow: "hidden"
          }}
        >
          {isEditing === 1 ? (
            <div>
              <form onSubmit={(e) => editTweet(e, props.info.id, newtweet)}>
                <textarea
                  style={{ width: "100%" }}
                  onChange={(e) => setNewtweet(e.target.value)}
                  value={newtweet}
                ></textarea>
                <button
                  type={"submit"}
                  disabled={newtweet.length > 0 ? false : true}
                  style={{ float: "right" }}
                >
                  Update
                </button>
              </form>
            </div>
          ) : (
            <div>
              <span style={{ color: "blue", fontWeight: "bold" }}>@User</span>
              &nbsp;
              {props.info.tweet}
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(1);
                  }}
                >
                  Edit
                </a>
                &nbsp;&nbsp;
                <a href="#" onClick={(e) => deleteTweet(e, props.info.id)}>
                  Delete
                </a>
                <span style={{ float: "right" }}>
                  {new Date(props.info.time * 1000).toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <div style={{ marginTop: "10px" }}>
        {tweets.map((tweet) => (
          <SingleTweet key={tweet.id + "_" + tweet.time} info={tweet} />
        ))}
      </div>
    );
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Twitter Feed</h2>
      <TweetBox />
      <TweetList />
    </div>
  );
}
