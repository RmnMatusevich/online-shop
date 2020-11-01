import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head"
import { attributes, react as HomeContent } from '../content/home.md';

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/components");
  // };

  render() {
    let { title, cats } = attributes;
    return (
        <>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
          </Head>
          <article>
            <h1>{title}</h1>
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                  <li key={k}>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                  </li>
              ))}
            </ul>
          </article>
        </>
    )
  }
}
