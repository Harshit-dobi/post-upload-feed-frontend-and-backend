import React from 'react'
import axios from 'axios'
const create_post = () => {


  const handleSubmit = async(e)=>{
    e.preventDefault()


    const formdata = new FormData(e.target)
    axios.post("http://localhost:3000/upload-post", formdata)
    .then((res)=>{
      alert("post created")
      e.target.reset()
    })
    .catch((err)=>{
      console.log(err);
      alert("error creating post")
      
    })

  }



  return (
    <section className='create-post'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder='Enter Caption' required />
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default create_post