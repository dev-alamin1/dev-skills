import React from 'react';

const Blog = () => {
    return (
        <div className='bg-indigo-200'>
             <div className='px-10 md:px-20 py-10'>
                    <h2 className='text-center text-4xl mt-10 font-[Poppins] text-orange-400'>Our Daily Blog</h2>

                    {/* Frist question and answer  */}

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is cors?
                        </div>
                        <div className="collapse-content"> 
                            <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                            <br />
                            <br />
                            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                            <br />

                            If The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.
                            <br />
                            <br />

                                This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. CORS will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.

                            </p>
                        </div>
                        
                    </div>

                    {/* Second quesiton and answer */}

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication
                        </div>
                        <div className="collapse-content"> 
                            <p>
                            Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.
                            <br /><br />
                            Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.

                            <br /><br />

                            <strong>Some reason why we use firebase </strong>
                            </p>

                                <br />
                            
                                <li>
                                    <strong>Storage :</strong> Google Firebase uses dedicated cloud-based NoSQL databases, Firestore, and a real-time database, to store information. Like other NoSQL databases, they save information in collections and documents.

                                    Data querying doesn't depend on the amount of data stored in the database. Instead, it's complicated by the number of results the query brings.
                                
                                </li>

                                <li>
                                    <strong>Hosting :</strong>
                                    You can also host your web app easily on Firebase. Offering microservices, Firebase lets you host and deploy your web app rapidly with a few commands. When you do so, your app sits on globally distributed content delivery networks (CDNs). This ensures that users can read and write to your app without downtime.
                                </li>

                                <li>
                                    <strong>Authentication :</strong>
                                    One of the time-saving features that you want to explore in Firebase is its authentication service. When you link your app with Firebase, you might not need to create a separate login interface. To save time, you can use its built-in login UI to sign users into your app.
                                    <br />
                                    And for more flexibility, you can use the authentication SDK instead. This allows you to sign users in using several other authentication methods available.
                                </li>

                                <li>
                                    <strong>Firebase ML : </strong>
                                    Firebase ML comes in handy if you have a machine learning project to deploy along with your app. Firebase offers machine learning capabilities for training models. Thus, it lets you integrate custom models into your app and host them in the cloud.
                                </li>

                                <li>
                                    <strong>Built-In Push Notifications : </strong>
                                    Coding and implementing push notifications can be arduous. Firebase's built-in push notification lets you add personalized and real-time alert capabilities to your app without writing a separate script from scratch.
                                </li>

                                <br />
                                <p><strong>Other options For implement authentication </strong></p>

                                <li>Auth0.</li>
                                <li>Okta</li>
                                <li>Supabase</li>
                                <li>Onelogin</li>
                                <li>Authress</li>
                            
                        </div>
                        
                    </div>

                    {/* Third Question and ans  */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                          How does the private route work?
                        </div>
                        <div className="collapse-content"> 
                            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                            <br />
                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        </div>
                        
                    </div>
    
                    {/* Fourth qustion and ans  */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 md:w-6/12 mx-auto mt-10 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                         What is Node? How does Node work?
                        </div>
                        <div className="collapse-content"> 
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

                            <br />

                            <p>
                                <strong>Working of Node.js :</strong> 
                                Node.js basically works on two concept
                                <li>
                                    Asynchronous
                               </li>

                                <li>
                                   Non-blocking I/O
                                </li>
                            </p>

                            <br />

                            <p> <strong>Asynchronous: </strong> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.</p>

                            <br />

                            <p> <strong>Non-blocking I/o: </strong> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>
                        
                        </div>
                        
                    </div>
    
                    </div>
             </div>
    );
};

export default Blog;