import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-600">
      <div className="blogs-container py-10">
        <div className="container flex flex-col w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <h4 className="font-bold">What is the pupose of react-router?</h4>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              A tool that allows you to handle routes in a web app, using
              dynamic routing. Dynamic routing takes place as the app is
              rendering on your machine, unlike the old routing architecture
              where the routing is handled in a configuration outside of a
              running app. React router implements a component-based approach to
              routing. It provides different routing components according to the
              needs of the application and platform. The following illustration
              shows how react router’s dynamic routing works as compared to
              traditional static routing:
            </p>
          </div>
        </div>

        <div className="container flex flex-col w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100 my-5">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <h4 className="font-bold">How does Context-Api Works?</h4>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              React.createContext-Api. It returns a consumer and a provider.
              Provider is a component that as it's names suggests provides the
              state to its children. It will hold the "store" and be the parent
              of all the components that might need that store. Consumer as it
              so happens is a component that consumes and uses the state.
            </p>
          </div>
        </div>

        <div className="container flex flex-col w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <h4 className="font-bold">useRef Hook ?</h4>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              The useRef hook is a built-in React hook that takes one argument
              or parameter as its initial value and returns a reference or
              persisted mutable values. This reference, or ref for short,
              contains the value which can be retrieved using the current
              property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
