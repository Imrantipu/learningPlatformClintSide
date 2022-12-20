import React from "react";

const Blog = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 m-5'>
      <div className="card w-96 bg-primary text-primary-content mt-5">
        <div className="card-body">
          <h2 className="card-title">Q:What is cors?</h2>
          <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
        </div>
      </div>
      <div className="card w-96 bg-primary text-primary-content mt-5">
        <div className="card-body">
          <h2 className="card-title">Q:Why are using firebase?What other options do you have to implement authentication?</h2>
          <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
        </div>
      </div>
      <div className="card w-96 bg-primary text-primary-content mt-5">
        <div className="card-body">
          <h2 className="card-title">Q:How does private route work?</h2>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
        </div>
      </div>
      <div className="card w-96 bg-primary text-primary-content mt-5">
        <div className="card-body">
          <h2 className="card-title">Q:What is node?How does node work?</h2>
          <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
