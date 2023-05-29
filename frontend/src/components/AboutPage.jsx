const AboutPage = () => {
  return (
    <div className="flex flex-col px-90">
      <div className="flex justify-start">
        <div className="w-1/3 pt-20">
          <p className="text-7xl font-poiret font-normal">About the project</p>
        </div>
        <div className="w-2/3 pt-48 pr-96">
          <p className="font-opensans text-lg leading-10">
            In this web application, i've harnessed the power of some of the
            most popular JavaScript frameworks and libraries to provide a
            seamless and intuitive user experience. At the core of application,
            i use <b>React</b>, a JavaScript library for building user
            interfaces. This allows me to develop complex UIs from small,
            isolated pieces of code called "components", making our application
            both highly modular and maintainable.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-4 pl-72">
        <div className="w-2/3">
          <p className="font-opensans text-lg leading-10	">
            To manage the state of app, i use <b>Redux Toolkit</b>, a powerful
            library for efficient state management in JavaScript applications.
            It allows us to handle app's state in a predictable manner, thanks
            to the principles of actions, reducers, and a single source of truth
            for state. For the aesthetic and responsiveness of application, i
            utilize <b>TailwindCSS</b>, a utility-first CSS framework. It
            enables us to build custom designs without leaving HTML, with
            low-level utility classes that let us build completely custom,
            production-ready designs. My application connects to an external
            API, <b>fakestoreapi.com</b>, using Axios, a promise-based HTTP
            client for the browser and Node.js. This is where i get the list of
            products that you see on our platform. I chose <b>Axios</b> because
            it is easy to use, supports the Promise API, and has a wide range of
            useful features such as intercepting requests and responses,
            transforming data, and canceling requests.
          </p>
          <p className="font-opensans font-bold text-lg leading-6">
            It should be clarified that this project is not a finished
            commercial product. In this project, the practice of using some
            technologies / development tools was obtained, someone else's layout
            was used in Figma, so some elements were not implemented (such as
            the "Privacy Policy" page component in the Footer, Facebook shop
            icons, and so on).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
