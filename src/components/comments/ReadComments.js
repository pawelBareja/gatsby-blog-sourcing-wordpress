import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"

const ReadComments = ({ slug }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // const db = firebase.firestore()
    firebase
      .firestore()
      .collection("comments")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data())
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <div>
      {slug}
      {data ? data : "Loading..."}
    </div>
  )
}

export default ReadComments
