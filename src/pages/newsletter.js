import React from 'react'
import Layout from '../components/Layout'

const NewsLetterPage = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get the latest stories to your inbox</h2>
          <h4>Will send important</h4>
          <form className="contact-form" action="">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
            />
            <button type="submit" className="btn form-control">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetterPage
