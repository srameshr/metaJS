# metaJS

<h3>Meta programming demo's in JS using ES6 Proxy and Reflect</h3>

<h3>Motivation</h3>
  <p>Accessing properties that does not exist on the current object, or any of it's prototype
     chain <b>fails silently!</b> instead of throwing an Error or <b>Punching my face</b>.</p>
  <p>This can be frustrating sometimes and you have to debug it by attaching a debugger to that line and yada yada..
  This is when, JS subsets like TypeScript...
  </p>

<h3>Solution</h3>
  <h4>Proxies to the resuce</h4>
  <p>Proxies, work by trapping the normal behaviour of the target object with your implementation. The target object is specifed by you and so is the implementation. You see where I am getting at right? I tried to access
  a property that did not exist on <b>MY TARGET OBJECT</b> because the ES <b>GET IMPLEMENTATION</b> just failed silently instead of throwing hard.</p>
  <p>So with the help of proxy, I will write my own <b>GET IMPLEMENTATION!!!</b></p>
  <p>That is, I will <b>TRAP</b> the default <b>GET</b> behaviour and use my implementation. Have a look at proxy.js to see this in action.</p>

 <h3>More</h3>
 <p> For more, have a look at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming">Proxies and Reflect</a>. Before writing your own handler and traps, look at the table to make sure you are not violating ivariants</p>

